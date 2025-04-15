import {Box, Stack} from '@mui/material';
import {FC, RefCallback} from 'react';
import {OrderCard} from './OrderCard/OrderCard';
import {IOrder, OrderStatus} from '../../types/order';

interface IProps {
    orders: IOrder[];
    observedRef: RefCallback<HTMLDivElement>;
}

export const MyOrdersList: FC<IProps> = ({orders, observedRef}) => {
    return (
        <Stack spacing={'25px'} mt={'25px'}>
            {orders.map(({id, date, orderName, status, review}: IOrder) => {
                const actionHref =
                    status === OrderStatus.IN_PROGRESS
                        ? `/order/${id}/chat`
                        : `/order/${id}/review`;

                return (
                    <Box key={id}>
                        <OrderCard
                            number={id}
                            date={date}
                            service={orderName}
                            status={status}
                            actionHref={actionHref}
                            withReview={!!review}
                        />
                    </Box>
                );
            })}
            <Box ref={observedRef}></Box>
        </Stack>
    );
};
