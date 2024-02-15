import Validator from './validator';
import RequiredRule from './rules/RequiredRule';
import {User} from '@prisma/client';
import ValidatePhone from './rules/ValidatePhone';
import ValidateEmail from './rules/ValidateEmail';
import ValidateEducation from './rules/ValidateEducation';

export class ValidatorService {
    private validator: Validator;

    /**
     * Constructor
     */
    constructor() {
        this.validator = new Validator();
        this.validator.addRule('required', new RequiredRule());
        this.validator.addRule('phone', new ValidatePhone());
        this.validator.addRule('email', new ValidateEmail());
        this.validator.addRule('education', new ValidateEducation());
    }

    /**
     * Validate user by rules
     *
     * @param data
     */
    public validateUser(data: User) {
       return this.validator.validate(data, {
            firstname: ['required'],
            lastname: ['required'],
            email: ['required', 'email'],
            age: ['required'],
            education: ['required', 'education'],
            phone: ['required', 'phone'],
        });
    }
}