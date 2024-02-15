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

export enum Education {
    Bachelor = 'Bachelor',
    Doctor = 'Doctor',
    HighSchool = 'High school'
}

export type DataFieldType = 'firstname' | 'lastname' | 'age' | 'phone' | 'education' | 'email';