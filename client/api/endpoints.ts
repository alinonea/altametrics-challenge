/*
 * API endpoints list
 */

/*
 * Invoices endpoints
 */
export const InvoicesEndpoints = {
    /* Get all invoices */
    getAll: () => `/invoices`,
    
    /* Get a single invoice by ID */
    getById: (id: number) => `/invoices/${id}`,
  } as const;
  
  /*
   * Authentication endpoints
   */
  export const AuthEndpoints = {
    /* Login endpoint */
    login: () => '/auth/login',
  } as const;