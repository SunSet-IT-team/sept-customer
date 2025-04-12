import {FC} from 'react';
import {Stack} from '@mui/material';
import {ReviewItem} from './ReviewItem/ReviewItem';
import {IOrderWithReviewData} from '../../types/order';

interface IProps {
    orders: IOrderWithReviewData[];
}

/**
 * Список отзывов пользователя.
 * Экран - мои отзывы
 */
export const MyReviewsList: FC<IProps> = ({orders}) => {

    return (
        <Stack spacing={'45px'} mt={'35px'} px={'20px'}>
            {orders.map(({executor, isFavourite, orderWithReview}) => {
                return (
                    <ReviewItem
                        order={orderWithReview}
                        executor={executor}
                        isFavourite={isFavourite}
                    />
                );
            })}
        </Stack>
    );
};
