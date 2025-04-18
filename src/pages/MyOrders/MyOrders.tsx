import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {MyOrdersList} from '../../components/MyOrdersList/MyOrdersList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchOrders} from '../../hooks/Orders/useFetchOrders';
import {BackLayout} from '../layouts/BackLayout';
import {LayoutWithNavbar} from '../layouts/LayoutWithNavbar/LayoutWithNavbar';

export const MyOrders: FC = () => {
    const {orders, isLoading, ref} = useFetchOrders();

    if (!orders) {
        return <Spinner />;
    }

    return (
        <>
            <Helmet>
                <title>Мои заказы</title>
            </Helmet>
            <BackLayout title="Мои заказы">
                <LayoutWithNavbar>
                    <MyOrdersList orders={orders} observedRef={ref} />
                    {isLoading && <Spinner />}
                </LayoutWithNavbar>
            </BackLayout>
        </>
    );
};
