import {ThemeProvider} from '@mui/material';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {FC, PropsWithChildren} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '../store/store';
import {theme} from '../theme/theme';
const queryClient = new QueryClient();

export const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <HelmetProvider>
            <PersistGate loading={null} persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <Provider store={store}>
                        <BrowserRouter>
                            <ThemeProvider theme={theme}>
                                {children}
                            </ThemeProvider>
                        </BrowserRouter>
                    </Provider>
                </QueryClientProvider>
            </PersistGate>
        </HelmetProvider>
    );
};
