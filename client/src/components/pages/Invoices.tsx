import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import axios from 'axios';
import InvoicesList from '../InvoicesList';
import { Invoice } from '../../types';
import InvoiceModal from '../InvoiceModal';
import { useNavigate } from 'react-router-dom';
import { useInvoice, useInvoices } from '../../queries/InvoiceQueries';

type InvoicesProps = {}

const Invoices: FC<InvoicesProps> = ({}) => {
    const invoices = useInvoices().data || [];
    console.log(invoices);

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <InvoicesList invoices={invoices}/>
        </div>
    )
};

export default Invoices;