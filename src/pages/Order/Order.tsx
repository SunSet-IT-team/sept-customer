import {Navigate, useParams} from 'react-router-dom';
import {Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {OrderBody} from '../../components/OrderElements/OrderBody/OrderBody';
import {OrderReviewShort} from '../../components/OrderElements/OrderReviewShort/OrderReviewShort';
import {Spinner} from '../../components/Spinner/Spinner';
import {myRewiewTextSx} from './styles';
import {useFetchOrderById} from '../../hooks/Orders/useFetchOrderById';
import {BackLayout} from '../layouts/BackLayout';

export const Order: FC = () => {
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
                <title>Заказ {orderId}</title>
            </Helmet>
            <BackLayout title={`Заявка №${orderId}`}>
                <OrderBody order={order} />

                {order.review && (
                    <>
                        <Typography variant="h5" sx={myRewiewTextSx}>
                            Мой отзыв
                        </Typography>

                        <OrderReviewShort
                            orderId={orderId}
                            review={order.review}
                        />
                    </>
                )}
            </BackLayout>
        </>
    );
};
