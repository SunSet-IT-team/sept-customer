import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {CheckIsMobile} from './components/CheckIsMobile/CheckIsMobile.tsx';
import {Providers} from './components/Providers/Providers.tsx';
import './index.css';
import {ToastContainer} from 'react-toastify';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Providers>
            <CheckIsMobile>
                <ToastContainer />
                <App />
            </CheckIsMobile>
        </Providers>
    </StrictMode>
);
