import {FC, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {OrderReviewShort} from '../../OrderElements/OrderReviewShort/OrderReviewShort';
import {IOrder} from '../../../types/order';
import {imageStyle, useStyles} from './styles';
import {ToggleExecutorFavourite} from '../../ToggleExecutorFavourite/ToggleExecutorFavourite';
import {IReview} from '../../../types/executor';

interface IProps {
    review: IReview;
}

/**
 * Карточка отзыва пользователя небольшой с информацией о заказе
 * Экран - мои отзывы
 */
export const ReviewItem: FC<IProps> = ({review}) => {
    const [isFavourite, setFavourite] = useState<boolean>(true);
    const styles = useStyles();

    const toggleFavourite = () => {
        setFavourite((isFavourite) => !isFavourite);
    };

    return (
        <Box>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                {/* Левая часть — аватар */}
                <Box sx={styles.imageContainerStyle}>
                    <img
                        src={review.target.profileImg}
                        alt={``}
                        style={imageStyle}
                    />
                    <ToggleExecutorFavourite
                        sx={styles.toggleFavouriteStyle}
                        executor={review.target}
                        isFavourite={isFavourite}
                        onClick={toggleFavourite}
                    />
                </Box>

                {/* Правая часть — текст */}
                <Box>
                    <Typography fontWeight={600}>
                        {review.author.name}
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
