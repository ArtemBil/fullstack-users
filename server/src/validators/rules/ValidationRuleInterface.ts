import {User} from '@prisma/client';
import {DataFieldType} from '../../types/user-types';

export default interface IValidationRule {
    /**
     * Validate the field
     *
     * @param data
     * @param field
     */
    validate(data: User, field: DataFieldType): boolean;

    /**
     * Get error message if failed
     *
     * @param data
     * @param field
     */
    getMessage(data: User, field: string): string;
}