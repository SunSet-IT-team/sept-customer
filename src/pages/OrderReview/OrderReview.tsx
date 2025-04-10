import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {Navigate, useParams} from 'react-router-dom';
import {OrderReviewBody} from '../../components/OrderReview/OrderReviewBody/OrderReviewBody';
import {data} from './data';

export const OrderReview: FC = () => {
    const {order_id} = useParams();
    const isConfirmed = !(data.status === 'Выполнен');

    if (!order_id) return <Navigate to={'/'} replace />;

    const order = useTypedSelector((state) => {
        return state.orders.orders.find((order) => order.id === order_id);
    });

    const review = useTypedSelector((state) => {
        return state.newReviewForm.formData
    });

    if (!order) return <Navigate to={'/'} replace />;

    return (
        <Box py={'26px'} px={'35px'}>
            <Helmet>
                <title>Отзыв на заказ {order_id}</title>
            </Helmet>
            <PageTitle title={`Заявка №${order_id}`} />

            <OrderReviewBody data={data} isConfirmed={isConfirmed} />
        </Box>
    );
};
