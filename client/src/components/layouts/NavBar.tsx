import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider'
import ReceiptIcon from '@mui/icons-material/Receipt';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const navigation: Navigation = [
    {
      segment: 'invoices',
      title: 'Invoices',
      icon: <ReceiptIcon />,
    },
    {
      segment: 'invoices',
      title: 'Orders',
      icon: <ViewListIcon />,
    },
    {
        segment: 'invoices',
        title: 'Bills',
        icon: <AccountBalanceIcon />,
      },
];

import { FC } from 'react';
import Toolbar from './Toolbar';
import NavBarAppTitle from './NavBarAppTitle';


type NavBarProps = {
    children: React.ReactNode
}

const NavBar: FC<NavBarProps> = ({children}) => {

    return (
        <AppProvider>
            <DashboardLayout navigation={navigation} slots={{
                toolbarActions: Toolbar,
                appTitle: NavBarAppTitle
            }}>
                {children}
            </DashboardLayout>
        </AppProvider>
    )
};

export default NavBar;