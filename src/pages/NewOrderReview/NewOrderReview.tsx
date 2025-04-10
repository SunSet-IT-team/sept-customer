import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {useParams} from 'react-router-dom';
import {OrderInfo} from '../../components/OrderInfo/OrderIfo';
import {orderTitleSx} from '../../components/OrderReview/Form/styles';
import {order_data} from './data';
import {OrderReviewForm} from '../../components/OrderReview/Form/OrderReviewForm';

export const NewOrderReview: FC = () => {
    const {order_id} = useParams();

    return (
        <Box py={'26px'} px={'35px'}>
            <Helmet>
                <title>Новый отзыв</title>
            </Helmet>
            <PageTitle title="Новый отзыв" />

            <Typography
                sx={orderTitleSx}
                variant="h5"
            >{`Заявка №${order_id}`}</Typography>

            <OrderInfo order_data={order_data} />

            <OrderReviewForm />
        </Box>
    );
};
