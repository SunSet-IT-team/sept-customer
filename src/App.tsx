import {Route, Routes} from 'react-router-dom';
import './App.css';
import {AboutExecutor} from './components/AboutExecutor/AboutExecutor';
import Layout from './components/Layout/Layout';
import {OrderCreated} from './components/OrderCreated/OrderCreated';
import {Auth} from './pages/Auth/Auth';
import {ChooseExecutor} from './pages/ChooseExecutor/ChooseExecutor';
import {Confirmation} from './pages/Confirmation/Confirmation';
import {ConfirmOrder} from './pages/ConfirmOrder/ConfirmOrder';
import {ForgotPassword} from './pages/ForgotPassword/ForgotPassword';
import {Home} from './pages/Home/Home';
import {NewOrder} from './pages/NewOrder/NewOrder';
import {SignIn} from './pages/SignIn/SignIn';
import {SignUp} from './pages/SignUp/SignUp';
function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/my-calls" element={<>My calls</>} />
                <Route path="/profile" element={<>Profile</>} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/service">
                <Route path=":service_id/new_order" element={<NewOrder />} />
                <Route
                    path=":service_id/new_order/choose_executor"
                    element={<ChooseExecutor />}
                />
                <Route
                    path=":service_id/new_order/confirm_order"
                    element={<ConfirmOrder />}
                />
            </Route>
            <Route path="order">
                <Route
                    path="order_created/:order_id"
                    element={<OrderCreated />}
                />
            </Route>
            <Route path="executor">
                <Route path=":executor_id" element={<AboutExecutor />} />
            </Route>
        </Routes>
    );
}

export default App;
