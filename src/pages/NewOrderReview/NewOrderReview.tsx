import {Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {Navigate, useParams} from 'react-router-dom';
import {OrderInfo} from '../../components/OrderInfo/OrderIfo';
import {orderTitleSx} from '../../components/OrderElements/Form/styles';
import {OrderReviewForm} from '../../components/OrderElements/Form/OrderReviewForm';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchOrderById} from '../../hooks/Orders/useFetchOrderById';
import {BackLayout} from '../layouts/BackLayout';

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
        <>
            <Helmet>
                <title>Отзыв на заказ {orderId}</title>
            </Helmet>
            <BackLayout title={`Отзыв на заказ ${orderId}`}>
                <Typography
                    sx={orderTitleSx}
                    variant="h5"
                >{`Заявка №${orderId}`}</Typography>

                <OrderInfo order={order} />

                <OrderReviewForm />
            </BackLayout>
        </>
    );
};
