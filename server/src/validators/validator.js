"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = /** @class */ (function () {
    function Validator() {
        this.rules = {};
    }
    /**
     * Add new rule
     *
     * @param ruleName
     * @param rule
     */
    Validator.prototype.addRule = function (ruleName, rule) {
        this.rules[ruleName] = rule;
    };
    /**
     * Validate fields by the rules
     *
     * @param data
     * @param fields
     */
    Validator.prototype.validate = function (data, fields) {
        var _this = this;
        var errors = {};
        var fieldsArray = Object.entries(fields);
        fieldsArray.forEach(function (_a) {
            var field = _a[0], rules = _a[1];
            rules.forEach(function (rule) {
                var ruleValidator = _this.rules[rule];
                if (ruleValidator.validate(data, field)) {
                    return false;
                }
                Array.isArray(errors[field]) ? errors[field].push(ruleValidator.getMessage(data, field)) : errors[field] = [ruleValidator.getMessage(data, field)];
            });
        });
        return { isValid: Object.keys(errors).length === 0, errors: errors };
    };
    return Validator;
}());
exports.default = Validator;
