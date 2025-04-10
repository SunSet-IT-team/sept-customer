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
import {OrderChat} from './pages/OrderChat/OrderChat';
import {SignIn} from './pages/SignIn/SignIn';
import {SignUp} from './pages/SignUp/SignUp';
import {MyOrders} from './pages/MyOrders/MyOrders';
import {OrderReview} from './pages/OrderReview/OrderReview';
import {NewOrderReview} from './pages/NewOrderReview/NewOrderReview';
import {MyReviews} from './pages/MyReviews/MyReviews';
import ProfilePage from './pages/Profile/Profile';
function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/my-calls" element={<MyOrders />} />
                <Route path="/my-reviews" element={<MyReviews />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/auth" element={<Auth />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/favorites" element={<>Избранное</>} />
            <Route path="/settings" element={<>Настройки</>} />
            <Route path="/support" element={<>Поддержка</>} />
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
                <Route path=":order_id/chat" element={<OrderChat />} />
                <Route path=":order_id/review" element={<OrderReview />} />
                <Route
                    path=":order_id/add-review"
                    element={<NewOrderReview />}
                />
            </Route>
            <Route path="executor">
                <Route path=":executor_id" element={<AboutExecutor />} />
            </Route>
        </Routes>
    );
}

export default App;
