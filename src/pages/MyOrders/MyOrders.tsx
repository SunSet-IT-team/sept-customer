import {Box} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {MyOrdersList} from '../../components/MyOrdersList/MyOrdersList';
import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';
import {Spinner} from '../../components/Spinner/Spinner';

export const MyOrders: FC = () => {
    const {data: ordersData, isLoading} = useQuery({
        queryFn: () => SERVICES.OrderService.getUserOrders(),
        queryKey: ['get all user orders'],
    });

    if (isLoading || !ordersData || !ordersData.length) {
        return <Spinner />;
    }
    console.log(ordersData);

    return (
        <Box py={'26px'}>
            <Helmet>
                <title>Мои заказы</title>
            </Helmet>
            <PageTitle title="Мои заказы" />
            <MyOrdersList orders={ordersData} />
        </Box>
    );
};
