"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidateEducation = /** @class */ (function () {
    function ValidateEducation() {
        this.possibleEducations = [
            'Bachelor',
            'Doctor',
            'High School'
        ];
    }
    /**
     * @inheritDoc
     */
    ValidateEducation.prototype.validate = function (data, field) {
        return this.possibleEducations.includes(data[field]);
    };
    /**
     * @inheritDoc
     */
    ValidateEducation.prototype.getMessage = function (data, field) {
        return "Please choose only one of these: " + this.possibleEducations.join(', ');
    };
    return ValidateEducation;
}());
exports.default = ValidateEducation;
