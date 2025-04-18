import {StrictMode} from 'react';
import {ToastContainer} from 'react-toastify';
import {CheckIsMobile} from '../components/CheckIsMobile/CheckIsMobile';
import {Providers} from './providers/Providers';
import AppRoute from './routes';
import AppStatic from './static';

function App() {
    return (
        <StrictMode>
            <Providers>
                <CheckIsMobile>
                    <AppStatic />
                    <ToastContainer />
                    <AppRoute />
                </CheckIsMobile>
            </Providers>
        </StrictMode>
    );
}

export default App;
