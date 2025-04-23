import {Box, Paper} from '@mui/material';
import {FC, ReactNode} from 'react';
import {Navbar} from '../../../components/Navbar/Navbar';
import {useLayoutStyles} from './styles';

interface IProps {
    children: ReactNode;
}

export const LayoutWithNavbar: FC<IProps> = ({children}) => {
    const styles = useLayoutStyles();
    return (
        <Box sx={styles.layout}>
            {children}
            <Paper sx={styles.navigation} elevation={0}>
                <Navbar />
            </Paper>
        </Box>
    );
};
