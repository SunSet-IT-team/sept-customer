import {ThemeProvider} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {theme} from '../../theme/theme';
export const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BrowserRouter>
    );
};
