import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {Navigate, useParams} from 'react-router-dom';
import {OrderReviewBody} from '../../components/OrderReview/OrderReviewBody/OrderReviewBody';
import {data} from './data';
import {OrderReviewShort} from '../../components/OrderReview/OrderReviewShort/OrderReviewShort';
import {myRewiewTextSx} from './styles';

export const OrderReview: FC = () => {
    const {order_id} = useParams();
    const isConfirmed = !(data.status === 'Выполнен');

    if (!order_id) return <Navigate to={'/'} replace />;

    const {order, review} = useTypedSelector((state) => {
        const order = state.orders.orders.find(
            (order) => order.id === order_id
        );
        const review = order?.review;
        return {
            order,
            review,
        };
    });

    if (!order) return <Navigate to={'/'} replace />;

    return (
        <Box py={'26px'} px={'35px'}>
            <Helmet>
                <title>Отзыв на заказ {order_id}</title>
            </Helmet>
            <PageTitle title={`Заявка №${order_id}`} />

            <OrderReviewBody
                data={data}
                isConfirmed={isConfirmed}
                isReview={!!review}
            />

            {review && (
                <>
                    <Typography variant="h5" sx={myRewiewTextSx}>
                        Мой отзыв
                    </Typography>
                    <OrderReviewShort
                        order_id={order_id}
                        rating_score={review.rating}
                        review_text={review.text}
                        disabled
                    />
                </>
            )}
        </Box>
    );
};
