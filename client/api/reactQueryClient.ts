import { QueryClient } from '@tanstack/react-query';

/*
 * Configure and create the React Query client
 * Includes global configuration for queries and mutations
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
      staleTime: 30000, // Consider data fresh for 30 seconds
    },
  },
});

/*
 * Query key factory
 */
export const queryKeys = {
  invoices: {
    all: ['invoices'] as const,
    byId: (id: number) => ['invoices', id] as const,
  },
};