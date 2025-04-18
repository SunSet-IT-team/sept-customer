import {FC} from 'react';
import {Stack} from '@mui/material';
import {ReviewItem} from './ReviewItem/ReviewItem';
import {IOrder} from '../../types/order';
import {IReview} from '../../types/executor';

interface IProps {
    reviews: IReview[];
}

/**
 * Список отзывов пользователя.
 * Экран - мои отзывы
 */
export const MyReviewsList: FC<IProps> = ({reviews}) => {
    return (
        <Stack spacing={'45px'} mt={'35px'} px={'20px'}>
            {reviews.map((review) => {
                return <ReviewItem review={review} key={review.id} />;
            })}
        </Stack>
    );
};
