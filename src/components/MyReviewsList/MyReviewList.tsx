import {FC} from 'react';
import {Stack} from '@mui/material';
import {ReviewItem} from './ReviewItem/ReviewItem';
import {IOrder} from '../../types/order';

interface IProps {
    orders: IOrder[];
}

/**
 * Список отзывов пользователя.
 * Экран - мои отзывы
 */
export const MyReviewsList: FC<IProps> = ({orders}) => {
    return (
        <Stack spacing={'45px'} mt={'35px'} px={'20px'}>
            {orders.map((order) => {
                return <ReviewItem order={order} />;
            })}
        </Stack>
    );
};
