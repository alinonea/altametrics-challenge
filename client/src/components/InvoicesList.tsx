import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { FC, useState } from 'react';
import InvoiceModal from './InvoiceModal';
import { Invoice } from '../types';

type InvoicesListProps = {
    invoices: Invoice[] | [];
}

const InvoicesList: FC<InvoicesListProps> = (props) => {
    const { invoices } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const [invoiceId, setInvoiceId] = useState<number>(0);

    const handleOpen = (invoiceId: number) => {
        setInvoiceId(invoiceId);

        setModalOpen(true);
    }

    console.log(invoiceId);
    
    const handleClose = () => setModalOpen(false);

    return (
        <div className='flex flex-col h-screen justify-center items-center p-8'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead style={{background: "black"}}>
                    <TableRow>
                        <TableCell style={{color: "white"}}>Vendor</TableCell>
                        <TableCell style={{color: "white"}} align="center">Amount</TableCell>
                        <TableCell style={{color: "white"}} align="center">Due Date</TableCell>
                        <TableCell style={{color: "white"}} align="center">Description</TableCell>
                        <TableCell style={{color: "white"}} align="center">Paid</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {invoices && invoices.map((invoice) => (
                        <TableRow
                        key={invoice.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        className="dark:bg-gray-600 dark:border-gray-700"
                        component={'tr'}
                        onClick={() => { handleOpen(invoice.id) }}
                        >
                        <TableCell component="th" scope="row" style={{color: "white"}}>
                            {invoice.vendor_name}
                        </TableCell>
                        <TableCell style={{color: "white"}} align="center">{invoice.amount}</TableCell>
                        <TableCell style={{color: "white"}} align="center">{(new Date(invoice.due_date)).toDateString()}</TableCell>
                        <TableCell style={{color: "white"}} align="center">{invoice.description}</TableCell>
                        <TableCell align="center">{invoice.paid ? <Checkbox style={{color: "white"}} disabled checked/> : <Checkbox style={{color: "white"}} disabled/>}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <InvoiceModal handleClose={handleClose} open={modalOpen} invoiceId={invoiceId}/>
        </div>
    )
};

export default InvoicesList;