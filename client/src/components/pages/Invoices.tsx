import { FC } from 'react';
import InvoicesList from '../InvoicesList';
import { useInvoices } from '../../queries/InvoiceQueries';
import NavBar from '../layouts/NavBar';


type InvoicesProps = {}

const Invoices: FC<InvoicesProps> = ({}) => {
    const invoices = useInvoices().data || [];

    return (
        <NavBar>
            <div className="dark:bg-gray-300 min-h-screen">
                <InvoicesList invoices={invoices}/>
            </div>
        </NavBar>
    )
};

export default Invoices;