import {FC, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {OrderReviewShort} from '../../OrderElements/OrderReviewShort/OrderReviewShort';
import {IOrder} from '../../../types/order';
import {imageStyle, useStyles} from './styles';
import {ToggleExecutorFavourite} from '../../ToggleExecutorFavourite/ToggleExecutorFavourite';

interface IProps {
    order: IOrder;
}

/**
 * Карточка отзыва пользователя небольшой с информацией о заказе
 * Экран - мои отзывы
 */
export const ReviewItem: FC<IProps> = ({order}) => {
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
                        src={order.executor.profileImg}
                        alt={``}
                        style={imageStyle}
                    />
                    <ToggleExecutorFavourite
                        sx={styles.toggleFavouriteStyle}
                        executor={order.executor}
                        isFavourite={isFavourite}
                        onClick={toggleFavourite}
                    />
                </Box>

                {/* Правая часть — текст */}
                <Box>
                    <Typography fontWeight={600}>
                        {order.executor.title}
                    </Typography>
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
            <OrderReviewShort orderId={order.id} review={order.review} />
        </Box>
    );
};
