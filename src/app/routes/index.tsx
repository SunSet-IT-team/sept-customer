import {useEffect} from 'react';
import {Routes, Route, Outlet, Navigate} from 'react-router-dom';
import {AboutExecutor} from '../../components/AboutExecutor/AboutExecutor';
import {OrderCreated} from '../../components/OrderCreated/OrderCreated';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {Auth} from '../../pages/Auth/Auth';
import {ChooseExecutor} from '../../pages/ChooseExecutor/ChooseExecutor';
import {Confirmation} from '../../pages/Confirmation/Confirmation';
import {ConfirmOrder} from '../../pages/ConfirmOrder/ConfirmOrder';
import {Favorites} from '../../pages/Favorites/Favorites';
import LoadPage from '../../pages/LoadPage';
import {MyOrders} from '../../pages/MyOrders/MyOrders';
import {MyReviews} from '../../pages/MyReviews/MyReviews';
import {NewOrder} from '../../pages/NewOrder/NewOrder';
import {NewOrderReview} from '../../pages/NewOrderReview/NewOrderReview';
import {Order} from '../../pages/Order/Order';
import {OrderChat} from '../../pages/OrderChat/OrderChat';
import ProfilePage from '../../pages/Profile/Profile';
import {SettingsPage} from '../../pages/Setting/Setting';
import {SignIn} from '../../pages/SignIn/SignIn';
import {SignUp} from '../../pages/SignUp/SignUp';
import SupportChat from '../../pages/Support/SupportChat';
import Support from '../../pages/Support/Support';
import {Home} from '../../pages/Home/Home';

import {useAppDispatch} from '../store/store';
import {fetchUserData} from '../store/user/thunk';
import {ResetPage} from '../../pages/ResetPage';

function AppRoute() {
    const {user, isInited, isLoading} = useTypedSelector((state) => state.user);
    const token = localStorage.getItem('token');

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetching = dispatch(fetchUserData());

        return () => {
            fetching.abort();
        };
    }, [isInited]);

    const isAuthenticated = !!user && token;
    const isReady = isInited && !isLoading;

    if (!isReady)
        return (
            <Routes>
                <Route index element={<LoadPage />} />
            </Routes>
        );

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
                <Route path="/reset" element={<ResetPage />} />
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
                <Route index element={<Home />} />
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path="/my-reviews" element={<MyReviews />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/support" element={<Support />} />
                <Route path="/support/:chatId" element={<SupportChat />} />
                <Route path="/service">
                    <Route
                        path=":service_id/new_order/choose_executor"
                        element={<ChooseExecutor />}
                    />
                    <Route
                        path=":service_id/new_order/confirm_order"
                        element={<ConfirmOrder />}
                    />
                    <Route
                        path=":service_id/new_order"
                        element={<NewOrder />}
                    />
                </Route>
                <Route path="/order">
                    <Route
                        path="add-review/:orderId"
                        element={<NewOrderReview />}
                    />

                    <Route path="chat/:orderId" element={<OrderChat />} />

                    <Route
                        path="order_created/:orderId"
                        element={<OrderCreated />}
                    />

                    <Route path=":orderId" element={<Order />} />
                </Route>
                <Route path="/executor">
                    <Route path=":executorId" element={<AboutExecutor />} />
                </Route>
            </Route>

            {/* Резервный маршрут (404 или редирект) */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default AppRoute;
