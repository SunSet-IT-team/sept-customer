import {Box, Paper} from '@mui/material';
import {FC} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Navbar} from '../../../components/Navbar/Navbar';
import {useLayoutStyles} from './styles';

export const LayoutWithNavbar: FC = () => {
    /**
     * КОСТЫЛЬ
     */
    const location = useLocation();

    const styles = useLayoutStyles();
    return (
        <Box sx={location.pathname.includes('profile') ? {} : styles.layout}>
            <Outlet />
            <Paper sx={styles.navigation} elevation={0}>
                <Navbar />
            </Paper>
        </Box>
    );
};
