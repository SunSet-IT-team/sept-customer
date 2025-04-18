import {FC, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {OrderReviewShort} from '../../OrderElements/OrderReviewShort/OrderReviewShort';
import {useStyles} from './styles';
import {IReview} from '../../../types/executor';
import ExecutorAvatar from '../../../feature/ExecutorAvatar';

interface IProps {
    review: IReview;
}

/**
 * Карточка отзыва пользователя небольшой с информацией о заказе
 * Экран - мои отзывы
 */
export const ReviewItem: FC<IProps> = ({review}) => {
    const styles = useStyles();

    return (
        <Box>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                {/* Левая часть — аватар */}
                <ExecutorAvatar
                    execuotorId={review.target.id}
                    size={90}
                    imagePath={review.target.profileImg}
                    alt={review.target.title}
                />

                {/* Правая часть — текст */}
                <Box>
                    <Typography fontWeight={600}>
                        {review.target.title}
                    </Typography>
                    <Typography>
                        <Box component="span" fontWeight={600}>
                            Дата:
                        </Box>
                        {` ${review.data}`}
                    </Typography>
                    {/* <Typography>
                        <Box component="span" fontWeight={600}>
                            Адрес:
                        </Box>
                        {` ${order.address}`}
                    </Typography> */}
                </Box>
            </Stack>
            <OrderReviewShort orderId={review.order.id} review={review} />
        </Box>
    );
};
