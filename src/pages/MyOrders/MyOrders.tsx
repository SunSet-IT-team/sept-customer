import {Box} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import { useActions } from '../../hooks/useActions';
import { MyCallsList } from '../../components/MyCallsList/MyCallsList';
import { OrdersSlice } from '../../store/orders/orders.slice';
import { useQuery } from '@tanstack/react-query';
import { SERVICES } from '../../api';
import { Spinner } from '../../components/Spinner/Spinner';

export const MyOrders: FC = () => {
    const { setOrders } = useActions(OrdersSlice.actions)

    const {data: ordersData, isLoading} = useQuery({
        queryFn: () => SERVICES.OrderService.getUserOrders(),
        queryKey: ['get all user orders'],
    });

    useEffect(() => {
        if (ordersData?.length) setOrders(ordersData);
    }, [ordersData])

    if (isLoading || !ordersData || !ordersData.length) {
        return <Spinner />;
    }

    return (
        <Box py={'26px'}>
            <Helmet>
                <title>Мои заказы</title>
            </Helmet>
            <PageTitle title="Мои заказы" />
            <MyCallsList calls={ordersData} />
        </Box>
    );
};
