import {Stack} from '@mui/material';
import {IOrder, OrderStatus} from '../../../types/order';
import {FC} from 'react';
import {ActionButton} from '../ActionButton/ActionButton';

interface IProps {
    order: IOrder;
}

/**
 * Кнопки на странице заказа
 */
const OrderButtons: FC<IProps> = ({order}) => {
    return (
        <Stack sx={{mt: 3}}>
            {(order.status == OrderStatus.IN_PROGRESS ||
                order.status == OrderStatus.PENDING) && (
                <ActionButton isChatButton={true} orderId={order.id} />
            )}

            {!order.review && order.status == OrderStatus.COMPLETED && (
                <ActionButton isChatButton={false} orderId={order.id} />
            )}
        </Stack>
    );
};

export default OrderButtons;
