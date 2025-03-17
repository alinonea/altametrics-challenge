import { Backdrop, Box, Button, Checkbox, Fade, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { Invoice } from '../types';

type InvoicesListProps = {
    invoice: Invoice;
    handleClose: () => void;
    open: boolean;
}

const InvoiceModal: FC<InvoicesListProps> = (props) => {
    const {invoice, handleClose, open} = props;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Vendor: {invoice.vendor_name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Description: {invoice.description}
            </Typography>
            <Typography>
               Amount: {invoice.amount}
            </Typography>
            <Typography>
               Due date: {(new Date(invoice.due_date)).toDateString()}
            </Typography>
            <Typography>
               Paid: {invoice.paid ? 'Yes': 'No'}
            </Typography>
            </Box>
        </Modal>
        </div>
    );
};

export default InvoiceModal;