import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import axios from 'axios';
import InvoicesList from '../InvoicesList';
import { Invoice } from '../../types';
import InvoiceModal from '../InvoiceModal';
import { useNavigate } from 'react-router-dom';

type InvoicesProps = {}

const Invoices: FC<InvoicesProps> = ({}) => {
    const [invoices, setInvoices] = useState<Invoice[]>([])
    const [chosenInvoice, setChosenInvoice] = useState<Invoice>({id: 0 ,amount: 0, vendor_name: '', due_date: new Date(''), description: '', paid: false})

    const token = useSelector((state: RootState) => state.access_token.access_token)
    const navigate = useNavigate();

    const fetchInvoices = async() => {
        const invoices = (await axios.get(`http://localhost:3001/invoices`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data

        setInvoices(invoices);
    }

    const fetchInvoice = async(invoiceId: number) => {
        const invoice = (await axios.get(`http://localhost:3001/invoices/${invoiceId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })).data

        setChosenInvoice(invoice);
    }

    useEffect(() => {
        if(!token){
            navigate('/')
            return;
        }

        fetchInvoices();
    }, []);

    const [modalOpen, setModalOpen] = React.useState(false);
    const handleOpen = (invoiceId: number) => {
        fetchInvoice(invoiceId);

        setModalOpen(true);
    }
    const handleClose = () => setModalOpen(false);

    console.log(invoices);
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <InvoicesList invoices={invoices} handleOpen={handleOpen}/>
            <InvoiceModal handleClose={handleClose} open={modalOpen} invoice={chosenInvoice}/>
        </div>
    )
};

export default Invoices;