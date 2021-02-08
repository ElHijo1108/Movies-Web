export interface User{
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    birthdate?: Date;
    activation?: boolean
}