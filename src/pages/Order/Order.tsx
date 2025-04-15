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
    const {order_id} = useParams();

    if (!order_id) return <Navigate to={'/'} replace />;

    const {data: order, isLoading, isError} = useFetchOrderById(order_id);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError || !order) return <Navigate to={'/'} replace />;

    return (
        <Box py={'26px'} px={'35px'}>
            <Helmet>
                <title>Заказ {order_id}</title>
            </Helmet>
            <PageTitle title={`Заявка №${order_id}`} />

            <OrderBody order={order} />

            {order.review && (
                <>
                    <Typography variant="h5" sx={myRewiewTextSx}>
                        Мой отзыв
                    </Typography>
                    <OrderReviewShort
                        order_id={order_id}
                        rating_score={order.review.rating}
                        review_text={order.review.text}
                    />
                </>
            )}
        </Box>
    );
};
