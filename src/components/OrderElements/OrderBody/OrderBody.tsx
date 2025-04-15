import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {MainDataList} from '../MainDataList/MainDataList';
import {ActionButton} from '../ActionButton/ActionButton';
import {titleBefDataSx} from './styles';
import {IOrder, OrderStatus} from '../../../types/order';
import {formatOrderStatus} from '../../../utils/formaters';

interface IProps {
    order: IOrder;
}

/**
 * Тело заказа
 */
export const OrderBody: FC<IProps> = ({order}) => {
    return (
        <>
            <Box mt={'40px'}>
                <Stack spacing={1} mb={3}>
                    <Typography>
                        <strong>Услуга:</strong> {order.service.name}
                    </Typography>
                    <Typography>
                        <strong>Статус:</strong>{' '}
                        {formatOrderStatus(order.status)}
                    </Typography>
                </Stack>
            </Box>

            <Typography variant="h6" sx={titleBefDataSx}>
                Общие данные
            </Typography>

            <MainDataList order={order} />

            {!order.review &&
                (order.status == OrderStatus.IN_PROGRESS ||
                    order.status == OrderStatus.CONFIRMED) && (
                    <>
                        <ActionButton
                            isConfirmed={order.status === OrderStatus.CONFIRMED}
                        />
                    </>
                )}
        </>
    );
};
