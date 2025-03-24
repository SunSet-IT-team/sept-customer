import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Auth} from './pages/Auth/Auth';
import {Confirmation} from './pages/Confirmation/Confirmation';
import {ForgotPassword} from './pages/ForgotPassword/ForgotPassword';
import {SignIn} from './pages/SignIn/SignIn';
import {SignUp} from './pages/SignUp/SignUp';
function App() {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
    );
}

export default App;
