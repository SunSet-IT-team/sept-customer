import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {MyReviewsList} from '../../components/MyReviewsList/MyReviewList';
import { useFetchOrdersWithReview } from '../../hooks/Orders/useFetchOrdersWithReview';
import { Spinner } from '../../components/Spinner/Spinner';

export const MyReviews: FC = () => {
    const { data: ordersData, isLoading } = useFetchOrdersWithReview();

    if (isLoading || !ordersData || !ordersData.length) {
        return <Spinner />;
    }

    return (
        <Box py={'26px'}>
            <Helmet>
                <title>Мои отзывы</title>
            </Helmet>
            <PageTitle title="Мои отзывы" />
            <MyReviewsList orders={ordersData} />
        </Box>
    );
};
