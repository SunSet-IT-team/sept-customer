import {StrictMode} from 'react';
import {ToastContainer} from 'react-toastify';
import {CheckIsMobile} from '../components/CheckIsMobile/CheckIsMobile';
import {Providers} from './providers/Providers';
import AppRoute from './routes';
import AppStatic from './static';
import InstallPWAModal from '../components/InstallPWA/InstallPWA';

function App() {
    return (
        <StrictMode>
            <Providers>
                <CheckIsMobile>
                    <AppStatic />
                    <ToastContainer />
                    <AppRoute />
                    <InstallPWAModal />
                </CheckIsMobile>
            </Providers>
        </StrictMode>
    );
}

export default App;
