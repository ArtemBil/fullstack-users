"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RequiredRule = /** @class */ (function () {
    function RequiredRule() {
    }
    /**
     * @inheritDoc
     */
    RequiredRule.prototype.validate = function (data, field) {
        return !!data[field];
    };
    /**
     * @inheritDoc
     */
    RequiredRule.prototype.getMessage = function (data, field) {
        return "The field is required";
    };
    return RequiredRule;
}());
exports.default = RequiredRule;
