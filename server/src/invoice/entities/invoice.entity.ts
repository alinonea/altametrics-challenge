import { Exclude, Expose } from "class-transformer";

export class Invoice {
    @Expose()
    id: number;

    @Expose()
    vendor_name: string;
    
    @Expose()
    amount: number;
    
    @Expose()
    due_date: Date;

    @Expose()
    description: string;

    @Expose()
    paid: boolean;

    @Expose()
    userId: number;
}