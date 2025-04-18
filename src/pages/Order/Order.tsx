import {Navigate, useParams} from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {OrderBody} from '../../components/OrderElements/OrderBody/OrderBody';
import {OrderReviewShort} from '../../components/OrderElements/OrderReviewShort/OrderReviewShort';
import {Spinner} from '../../components/Spinner/Spinner';
import {myRewiewTextSx} from './styles';
import {useFetchOrderById} from '../../hooks/Orders/useFetchOrderById';

export const Order: FC = () => {
    const {orderId} = useParams();

    if (!orderId) return <Navigate to={'/'} replace />;

    const {data: order, isLoading, isError} = useFetchOrderById(orderId);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError || !order) return <Navigate to={'/'} replace />;

    return (
        <Box py={'26px'} px={'35px'}>
            <Helmet>
                <title>Заказ {orderId}</title>
            </Helmet>
            <PageTitle title={`Заявка №${orderId}`} />

            <OrderBody order={order} />

            {order.review && (
                <>
                    <Typography variant="h5" sx={myRewiewTextSx}>
                        Мой отзыв
                    </Typography>

                    <OrderReviewShort orderId={orderId} review={order.review} />
                </>
            )}
        </Box>
    );
};
