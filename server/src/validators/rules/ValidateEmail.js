"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateEmail = /** @class */ (function () {
    function ValidateEmail() {
        /**
         * RPC2822 Standard regex pattern for email validation
         */
        this.RPC2822_EMAIL_CHECK_PATTERN = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    }
    /**
     * @inheritDoc
     */
    ValidateEmail.prototype.validate = function (data, field) {
        return this.RPC2822_EMAIL_CHECK_PATTERN.test(data[field]);
    };
    /**
     * @inheritDoc
     */
    ValidateEmail.prototype.getMessage = function (data, field) {
        return "The email is incorrect";
    };
    return ValidateEmail;
}());
exports.default = ValidateEmail;
