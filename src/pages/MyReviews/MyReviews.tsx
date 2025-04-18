import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {MyReviewsList} from '../../components/MyReviewsList/MyReviewList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchReviews} from '../../hooks/Review/useFetchReviews';

export const MyReviews: FC = () => {
    const {reviews, isLoading, ref} = useFetchReviews();

    if (!reviews) {
        return <Spinner />;
    }

    console.log(reviews);

    return (
        <Box py={'26px'}>
            <Helmet>
                <title>Мои отзывы</title>
            </Helmet>
            <PageTitle title="Мои отзывы" />
            <MyReviewsList reviews={reviews} />
            {isLoading && <Spinner />}
        </Box>
    );
};
