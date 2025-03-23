import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Auth} from './pages/Auth/Auth';
import {SignUp} from './pages/SignUp/SignUp';
function App() {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />\
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    );
}

export default App;
