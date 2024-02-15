import IValidationRule from './ValidationRuleInterface';
import {User} from '@prisma/client';
import {DataFieldType} from '../../types/user-types';

export default class ValidateEducation implements IValidationRule {
    private possibleEducations = [
        'Bachelor',
        'Doctor',
        'High School'
    ]

    /**
     * @inheritDoc
     */
    validate(data: User, field: DataFieldType): boolean {
        return this.possibleEducations.includes(<string>data[field]);
    }

    /**
     * @inheritDoc
     */
    getMessage(data: User, field: string): string {
        return "Please choose only one of these: " + this.possibleEducations.join(', ');
    }
}