import IValidationRule from './rules/ValidationRuleInterface';
import {User} from '@prisma/client';
import {ErrorType, FieldRulesType, RuleType} from '../types/validation-types';
import {DataFieldType} from '../types/user-types';

export default class Validator {
    private rules: RuleType = {};

    /**
     * Add new rule
     *
     * @param ruleName
     * @param rule
     */
    public addRule(ruleName: string, rule: IValidationRule) {
        this.rules[ruleName] = rule;
    }

    /**
     * Validate fields by the rules
     *
     * @param data
     * @param fields
     */
    public validate(data: User, fields: FieldRulesType) {
        const errors: ErrorType = {};
        const fieldsArray = Object.entries(fields) as [DataFieldType, string[]][];

        fieldsArray.forEach(([field, rules]) => {
            rules.forEach((rule: string) => {
                const ruleValidator = this.rules[rule];

                if (ruleValidator.validate(data, field)) {
                    return false;
                }

                Array.isArray(errors[field]) ? errors[field].push(ruleValidator.getMessage(data, field)) : errors[field] = [ruleValidator.getMessage(data, field)];
            })
        });

        return {isValid: Object.keys(errors).length === 0, errors};
    }
}