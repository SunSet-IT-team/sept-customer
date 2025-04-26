import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {MyReviewsList} from '../../components/MyReviewsList/MyReviewList';
import {Spinner} from '../../components/Spinner/Spinner';
import {useFetchReviews} from '../../hooks/Review/useFetchReviews';
import {BackLayout} from '../layouts/BackLayout';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getCurrentUser} from '../../app/store/user/selectors';
import {LayoutWithNavbar} from '../layouts/LayoutWithNavbar/LayoutWithNavbar';
import {Typography} from '@mui/material';

export const MyReviews: FC = () => {
    const user = useTypedSelector(getCurrentUser);

    const {reviews, isLoading, ref} = useFetchReviews({
        senderId: Number(user.id),
    });

    if (!reviews) {
        return <Spinner />;
    }

    return (
        <>
            <Helmet>
                <title>Мои отзывы</title>
            </Helmet>
            <BackLayout title="Мои отзывы">
                <LayoutWithNavbar>
                    {reviews && reviews.length === 0 && !isLoading && (
                        <Typography
                            variant="h6"
                            sx={{textAlign: 'center', my: 2}}
                        >
                            Вы пока не написали ни одного отзыва
                        </Typography>
                    )}
                    <MyReviewsList reviews={reviews} observedRef={ref} />
                    {isLoading && <Spinner />}
                </LayoutWithNavbar>
            </BackLayout>
        </>
    );
};
