import axiosClient from '../../api/axiosClient';
import { InvoicesEndpoints } from '../../api/endpoints';
import { Invoice } from '../types';

export default class InvoiceService {
    static async getAll(): Promise<Invoice[]> {
        const response = await axiosClient.get(InvoicesEndpoints.getAll());
        return response.data;
    }

    static async getById(id: number): Promise<Invoice> {
        const response = await axiosClient.get(InvoicesEndpoints.getById(id));
        return response.data;
    }
}