import { Exclude, Expose } from "class-transformer";

export class User {
    @Exclude()
    id: number;

    @Expose()
    email: string;
    
    @Exclude()
    password: string;
    
    @Expose()
    name: string;
}