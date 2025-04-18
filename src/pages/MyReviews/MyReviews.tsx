import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {MyReviewsList} from '../../components/MyReviewsList/MyReviewList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchReviews} from '../../hooks/Review/useFetchReviews';
import {BackLayout} from '../layouts/BackLayout';

export const MyReviews: FC = () => {
    const {reviews, isLoading, ref} = useFetchReviews();

    if (!reviews) {
        return <Spinner />;
    }

    return (
        <>
            <Helmet>
                <title>Мои отзывы</title>
            </Helmet>
            <BackLayout title="Мои отзывы">
                <MyReviewsList reviews={reviews} />
                {isLoading && <Spinner />}
            </BackLayout>
        </>
    );
};
