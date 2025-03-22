import {ThemeProvider} from '@mui/material';
import {FC, PropsWithChildren} from 'react';
import {theme} from '../../theme/theme';

export const Providers: FC<PropsWithChildren> = ({children}) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
