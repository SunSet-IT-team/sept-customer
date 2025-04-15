import {Box, Stack} from '@mui/material';
import {FC, RefCallback} from 'react';
import {OrderCard} from './OrderCard/OrderCard';
import {IOrder} from '../../types/order';

interface IProps {
    orders: IOrder[];
    observedRef: RefCallback<HTMLDivElement>;
}

export const MyOrdersList: FC<IProps> = ({orders, observedRef}) => {
    return (
        <Stack spacing={'25px'} mt={'25px'}>
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
