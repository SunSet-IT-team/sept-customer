import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Home} from './pages/Home/Home';
import {SignUp} from './pages/SignUp/SignUp';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    );
}

export default App;
