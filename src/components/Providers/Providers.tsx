import {ThemeProvider} from '@mui/material';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FC, PropsWithChildren} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from '../../store/store';
import {theme} from '../../theme/theme';
const queryClient = new QueryClient();

export const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <BrowserRouter>
                        <ThemeProvider theme={theme}>{children}</ThemeProvider>
                    </BrowserRouter>
                </Provider>
            </QueryClientProvider>
        </HelmetProvider>
    );
};
