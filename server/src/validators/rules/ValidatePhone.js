"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidatePhone = /** @class */ (function () {
    function ValidatePhone() {
        /**
         * Regexp for UA phone number pattern
         */
        this.UA_PHONE_PATTERN_REGEXP = /^\+?3?8?(0\d{9})$/;
    }
    /**
     * @inheritDoc
     */
    ValidatePhone.prototype.validate = function (data, field) {
        return this.UA_PHONE_PATTERN_REGEXP.test(data[field]);
    };
    /**
     * @inheritDoc
     */
    ValidatePhone.prototype.getMessage = function (data, field) {
        return "Please enter UA phone number format";
    };
    return ValidatePhone;
}());
exports.default = ValidatePhone;
