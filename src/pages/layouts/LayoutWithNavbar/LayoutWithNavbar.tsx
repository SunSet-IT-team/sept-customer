import {Box, Paper} from '@mui/material';
import {FC, ReactNode} from 'react';
import {useLocation} from 'react-router-dom';
import {Navbar} from '../../../components/Navbar/Navbar';
import {useLayoutStyles} from './styles';

interface IProps {
    children: ReactNode;
}

export const LayoutWithNavbar: FC<IProps> = ({children}) => {
    /**
     * КОСТЫЛЬ
     */
    const location = useLocation();

    const styles = useLayoutStyles();
    return (
        <Box sx={location.pathname.includes('profile') ? {} : styles.layout}>
            {children}
            <Paper sx={styles.navigation} elevation={0}>
                <Navbar />
            </Paper>
        </Box>
    );
};
