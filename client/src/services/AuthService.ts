import { AxiosResponse } from 'axios';
import axiosClient from '../../api/axiosClient';
import { AuthEndpoints } from '../../api/endpoints';
import { UserLogin } from '../types'

export default class InvoiceService {
    static async login(user: UserLogin): Promise<AxiosResponse> {
        const response = await axiosClient.post(AuthEndpoints.login(), user);
        return response;
    }
}