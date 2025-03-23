import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {queryKeys } from '../../api/reactQueryClient';
import InvoicesService from '../services/InvoiceService';
import { Invoice } from '../types';

export const useInvoices = (): UseQueryResult<Invoice[]> => {
    return useQuery({
        queryKey: [...queryKeys.invoices.all],
        queryFn: async() => await InvoicesService.getAll(),
        meta: {
        errorMessage: 'Failed to fetch invoices',
        },
    });
};

export const useInvoice = (id: number): UseQueryResult<Invoice> => {
  return useQuery({
    queryKey: queryKeys.invoices.byId(id),
    queryFn: () => InvoicesService.getById(id),
    meta: {
      errorMessage: 'Failed to fetch invoice details',
    },
  });
};