import {Route, Routes} from 'react-router-dom';
import './App.css';
import {Auth} from './pages/Auth/Auth';
function App() {
    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    );
}

export default App;
