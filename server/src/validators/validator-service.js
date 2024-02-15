"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorService = void 0;
var validator_1 = require("./validator");
var RequiredRule_1 = require("./rules/RequiredRule");
var ValidatePhone_1 = require("./rules/ValidatePhone");
var ValidateEmail_1 = require("./rules/ValidateEmail");
var ValidateEducation_1 = require("./rules/ValidateEducation");
var ValidatorService = /** @class */ (function () {
    /**
     * Constructor
     */
    function ValidatorService() {
        this.validator = new validator_1.default();
        this.validator.addRule('required', new RequiredRule_1.default());
        this.validator.addRule('phone', new ValidatePhone_1.default());
        this.validator.addRule('email', new ValidateEmail_1.default());
        this.validator.addRule('education', new ValidateEducation_1.default());
    }
    /**
     * Validate user by rules
     *
     * @param data
     */
    ValidatorService.prototype.validateUser = function (data) {
        return this.validator.validate(data, {
            firstname: ['required'],
            lastname: ['required'],
            email: ['required', 'email'],
            age: ['required'],
            education: ['required', 'education'],
            phone: ['required', 'phone'],
        });
    };
    return ValidatorService;
}());
exports.ValidatorService = ValidatorService;
