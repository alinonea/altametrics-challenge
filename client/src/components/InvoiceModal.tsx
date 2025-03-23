import { Box, Modal, Typography } from '@mui/material';
import { FC } from 'react';
import { useInvoice } from '../queries/InvoiceQueries';;

type InvoicesListProps = {
    invoiceId: number;
    handleClose: () => void;
    open: boolean;
}

const InvoiceModal: FC<InvoicesListProps> = (props) => {
    const {invoiceId, handleClose, open} = props;

    const invoice = useInvoice(invoiceId).data;
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        color: 'black',
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
                Vendor: {invoice && invoice.vendor_name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               Description: {invoice &&invoice.description}
            </Typography>
            <Typography>
               Amount: {invoice && invoice.amount}
            </Typography>
            <Typography>
               Due date: {invoice && (new Date(invoice.due_date)).toDateString()}
            </Typography>
            <Typography>
               Paid: {invoice && invoice.paid ? 'Yes': 'No'}
            </Typography>
            </Box>
        </Modal>
        </div>
    );
};

export default InvoiceModal;