import {Box, Paper} from '@mui/material';
import {FC} from 'react';
import {Outlet} from 'react-router-dom';
import {Navbar} from '../Navbar/Navbar';

const Layout: FC = () => {
    return (
        <Box px={'20px'} position={'relative'} pb={'140px'}>
            <Outlet />
            <Paper
                sx={{
                    position: 'fixed',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'none',
                }}
                elevation={0}
            >
                <Navbar />
            </Paper>
        </Box>
    );
};

export default Layout;
