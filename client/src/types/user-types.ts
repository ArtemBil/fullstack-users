export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    phone: string;
    education: Education;
    createdAt: Date
}

export type UserCreateData = {
    firstname: string;
    lastname: string;
    age: string | number;
    phone: string;
    education: string;
    email: string;
}

export type UserValidationErrorFields = {
    firstname?: string[],
    lastname?: string[],
    age?: string[],
    phone?: string[],
    education?: string[],
    email?: string[]
}

export type DataFieldType = 'firstname' | 'lastname' | 'age' | 'phone' | 'education' | 'email';

export enum Education {
    Bachelor = 'Bachelor',
    Doctor = 'Doctor',
    HighSchool = 'High school'
}