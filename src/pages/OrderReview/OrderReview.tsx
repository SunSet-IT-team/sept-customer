import {Navigate, useParams} from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {OrderReviewBody} from '../../components/OrderReview/OrderReviewBody/OrderReviewBody';
import {OrderReviewShort} from '../../components/OrderReview/OrderReviewShort/OrderReviewShort';
import {Spinner} from '../../components/Spinner/Spinner';
import {myRewiewTextSx} from './styles';
import {data} from './data';
import {useFetchOrderById} from '../../hooks/Orders/useFetchOrderById';

export const OrderReview: FC = () => {
    const {order_id} = useParams();
    const isConfirmed = false;

    if (!order_id) return <Navigate to={'/'} replace />;

    const {data: order, isLoading, isError} = useFetchOrderById(order_id);
    const review = order?.review;

    if (isLoading) {
        return <Spinner />;
    }

    if (isError || !order) return <Navigate to={'/'} replace />;

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
                    />
                </>
            )}
        </Box>
    );
};
