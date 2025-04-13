import {Navigate, Route, Routes, Outlet} from 'react-router-dom';
import './App.css';
import {AboutExecutor} from './components/AboutExecutor/AboutExecutor';
import {LayoutWithNavbar} from './components/LayoutWithNavbar/LayoutWithNavbar';
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
import {Favorites} from './pages/Favorites/Favorites';
import {SettingsPage} from './pages/Setting/Setting';
import Support from './pages/Support/Support';
import SupportChat from './pages/Support/SupportChat';
import {useTypedSelector} from './hooks/useTypedSelector';
function App() {
    const {user, isInited, isLoading} = useTypedSelector((state) => state.user);
    // const isAuthenticated = user && isInited && !isLoading;
    const isAuthenticated = false;

    return (
        <Routes>
            {/* Публичные маршруты */}
            <Route
                element={
                    !isAuthenticated ? (
                        <Outlet />
                    ) : (
                        <Navigate to={`/`} replace />
                    )
                }
            >
                <Route path="/auth" element={<Auth />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/confirmation" element={<Confirmation />} />
            </Route>

            {/* Приватные маршруты */}
            <Route
                path="/"
                element={
                    isAuthenticated ? (
                        <Outlet />
                    ) : (
                        <Navigate to={`/auth`} replace />
                    )
                }
            >
                <Route element={<LayoutWithNavbar />}>
                    <Route index element={<Home />} />
                    <Route path="/my-orders" element={<MyOrders />} />
                    <Route path="/my-reviews" element={<MyReviews />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/support/chat" element={<SupportChat />} />
                <Route path="/service">
                    <Route
                        path=":service_id/new_order"
                        element={<NewOrder />}
                    />
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
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
