import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {MyOrdersList} from '../../components/MyOrdersList/MyOrdersList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchOrders} from '../../hooks/Orders/useFetchOrders';

export const MyOrders: FC = () => {
    const {orders, isLoading, ref} = useFetchOrders();

    if (!orders) {
        return <Spinner />;
    }

    return (
        <Box py={'26px'}>
            <Helmet>
                <title>Мои заказы</title>
            </Helmet>
            <PageTitle title="Мои заказы" />
            <MyOrdersList orders={orders} observedRef={ref} />
            {isLoading && <Spinner />}
        </Box>
    );
};
