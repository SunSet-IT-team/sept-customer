import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {IOrder} from '../../types/order';
import {useStyles} from './styles';
import {formatOrderStatus} from '../../utils/formaters';

interface IProps {
    order: IOrder;
}

/**
 * Верхняя часть с краткой информацией об заказе.
 * Испльзуется на странице создания нового отзыва.
 */
export const OrderInfo: FC<IProps> = ({order}) => {
    const styles = useStyles();

    return (
        <Box>
            <Typography sx={styles.text}>Дата: {order.date}</Typography>
            <Typography sx={styles.text}>
                Услуга: {order.service.name}
            </Typography>
            <Typography sx={styles.text}>
                Статус: {formatOrderStatus(order.status)}
            </Typography>
            <Typography sx={styles.text}>
                Исполнитель: {order.executor.title}
            </Typography>
        </Box>
    );
};
