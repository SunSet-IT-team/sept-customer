import {FC, RefCallback} from 'react';
import {Box, Stack} from '@mui/material';
import {ReviewItem} from './ReviewItem/ReviewItem';
import {IReview} from '../../types/executor';

interface IProps {
    reviews: IReview[];
    observedRef: RefCallback<HTMLDivElement>;
}

/**
 * Список отзывов пользователя.
 * Экран - мои отзывы
 */
export const MyReviewsList: FC<IProps> = ({reviews, observedRef}) => {
    return (
        <Stack spacing={'45px'} mt={'35px'} px={'20px'}>
            {reviews.map((review) => {
                return <ReviewItem review={review} key={review.id} />;
            })}
            <Box ref={observedRef}></Box>
        </Stack>
    );
};
