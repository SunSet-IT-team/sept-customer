import {Box, Stack, Typography} from '@mui/material';
import {FC, RefCallback} from 'react';
import {OrderCard} from './OrderCard/OrderCard';
import {IOrder} from '../../types/order';
import {useStyles} from './styles';

interface IProps {
    orders: IOrder[];
    observedRef: RefCallback<HTMLDivElement>;
}

/**
 * Список заказов
 */
export const MyOrdersList: FC<IProps> = ({orders, observedRef}) => {
    const styles = useStyles();

    if (!orders.length)
        return (
            <Typography variant="h4" sx={styles.noFind}>
                У Вас пока нет заказов
            </Typography>
        );

    return (
        <Stack spacing={'25px'} sx={styles.list}>
            {orders.map((el) => {
                return (
                    <Box key={el.id}>
                        <OrderCard order={el} />
                    </Box>
                );
            })}
            <Box ref={observedRef}></Box>
        </Stack>
    );
};
