import {Box, Paper} from '@mui/material';
import {FC} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar';
import {useLayoutStyles} from './styles';

/**
 * @TODO переименновать в что-то осмысленное связанное с навигацией
 */
const Layout: FC = () => {
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

export default Layout;
