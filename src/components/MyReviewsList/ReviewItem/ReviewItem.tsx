import {FC, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {OrderReviewShort} from '../../OrderReview/OrderReviewShort/OrderReviewShort';
import {IOrderWithReview} from '../../../types/order';
import {imageStyle, useStyles} from './styles';
import {ToggleExecutorFavourite} from '../../ToggleExecutorFavourite/ToggleExecutorFavourite';
import {IExecutorShort} from '../../../types/executor';

interface IProps {
    order: IOrderWithReview;
    executor: IExecutorShort;
    isFavourite: boolean;
}

/**
 * Карточка отзыва пользователя небольшой с информацией о заказе
 * Экран - мои отзывы
 */
export const ReviewItem: FC<IProps> = ({order, executor, isFavourite: isFavouriteInit}) => {
    console.log(isFavouriteInit);
    
    const [isFavourite, setFavourite] = useState<boolean>(isFavouriteInit);
    const styles = useStyles();

    const toggleFavourite = () => {
        setFavourite(isFavourite => !isFavourite)
    }

    return (
        <Box>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                {/* Левая часть — аватар */}
                <Box sx={styles.imageContainerStyle}>
                    <img src={executor.imgUrl} alt={``} style={imageStyle} />
                    <ToggleExecutorFavourite
                        sx={styles.toggleFavouriteStyle}
                        executor={executor}
                        isFavourite={isFavourite}
                        onClick={toggleFavourite}
                    />
                </Box>

                {/* Правая часть — текст */}
                <Box>
                    <Typography fontWeight={600}>{order.name}</Typography>
                    <Typography>
                        <Box component="span" fontWeight={600}>
                            Дата:
                        </Box>
                        {` ${order.date}`}
                    </Typography>
                    <Typography>
                        <Box component="span" fontWeight={600}>
                            Адрес:
                        </Box>
                        {` ${order.address}`}
                    </Typography>
                </Box>
            </Stack>
            <OrderReviewShort
                order_id={order.id}
                review_text={order.review.text}
                rating_score={order.review.rating}
            />
        </Box>
    );
};
