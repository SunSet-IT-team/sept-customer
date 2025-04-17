import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {Navigate, useParams} from 'react-router-dom';
import {OrderInfo} from '../../components/OrderInfo/OrderIfo';
import {orderTitleSx} from '../../components/OrderElements/Form/styles';
import {OrderReviewForm} from '../../components/OrderElements/Form/OrderReviewForm';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchOrderById} from '../../hooks/Orders/useFetchOrderById';

/**
 * Страница добалвения отзыва к товару
 */
export const NewOrderReview: FC = () => {
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
                <title>Отзыв на заказ {orderId}</title>
            </Helmet>
            <PageTitle title={`Отзыв на заказ ${orderId}`} />

            <Typography
                sx={orderTitleSx}
                variant="h5"
            >{`Заявка №${orderId}`}</Typography>

            <OrderInfo order={order} />

            <OrderReviewForm />
        </Box>
    );
};
