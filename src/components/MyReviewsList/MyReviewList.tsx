import {FC} from 'react';
import {Avatar, Box, IconButton, Stack, Typography} from '@mui/material';
import {FavoriteBorder} from '@mui/icons-material';
import {OrderReviewShort} from '../OrderReview/OrderReviewShort/OrderReviewShort';
import {useStyles} from './styles';

interface IProps {
    orders: any;
}

export const MyReviewsList: FC<IProps> = ({orders}) => {
    const styles = useStyles();

    return (
        <Stack spacing={'45px'} mt={'35px'} px={'20px'}>
            {orders.map((order: any) => {
                return (
                    <Box>
                        <Stack
                            direction="row"
                            spacing={2}
                            alignItems="flex-start"
                        >
                            {/* Левая часть — аватар */}
                            <Box position="relative">
                                <Avatar variant="rounded" sx={styles.avatar} />
                                <IconButton size="small" sx={styles.heartBtn}>
                                    <FavoriteBorder fontSize="small" />
                                </IconButton>
                            </Box>

                            {/* Правая часть — текст */}
                            <Box>
                                <Typography fontWeight={600}>
                                    {order.name}
                                </Typography>
                                <Typography>
                                    <Box component="span" fontWeight={600}>
                                        Дата:
                                    </Box>{' '}
                                    {order.date}
                                </Typography>
                                <Typography>
                                    <Box component="span" fontWeight={600}>
                                        Адрес:
                                    </Box>{' '}
                                    {order.address}
                                </Typography>
                            </Box>
                        </Stack>
                        <OrderReviewShort
                            order_id={order.id}
                            review_text={order.review.text}
                            rating_score={order.review.rating}
                            disabled
                        />
                    </Box>
                );
            })}
        </Stack>
    );
};
