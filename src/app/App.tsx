import {StrictMode} from 'react';
import {ToastContainer} from 'react-toastify';
import {CheckIsMobile} from '../components/CheckIsMobile/CheckIsMobile';
import {Providers} from './providers/Providers';
import AppRoute from './routes';

function App() {
    return (
        <StrictMode>
            <Providers>
                <CheckIsMobile>
                    <ToastContainer />
                    <AppRoute />
                </CheckIsMobile>
            </Providers>
        </StrictMode>
    );
}

export default App;
