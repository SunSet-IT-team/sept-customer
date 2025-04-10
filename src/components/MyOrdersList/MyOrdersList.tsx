import {Box, Stack} from '@mui/material';
import {FC} from 'react';
import {OrderCard} from './OrderCard/OrderCard';
import { IOrder } from '../../types/order';

interface IProps {
    orders: IOrder[];
}

export const MyOrdersList: FC<IProps> = ({orders}) => {

    return (
        <Stack spacing={'25px'} mt={'25px'}>
            {orders.map(({id, date, orderName, status, review}: IOrder) => {
              const actionHref = status === "В работе" ? `/order/${id}/chat` : `/order/${id}/review`

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
        </Stack>
    );
};
