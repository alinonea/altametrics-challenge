export type Invoice = {
    id: number;
    vendor_name: string;
    amount: number;
    due_date: Date;
    description: string;
    paid: boolean;
}