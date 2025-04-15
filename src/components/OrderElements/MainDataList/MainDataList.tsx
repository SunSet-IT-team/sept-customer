import {Box} from '@mui/material';
import {DataItem} from '../DataItem/DataItem';
import {FC} from 'react';
import {IOrder} from '../../../types/order';

interface IProps {
    order: IOrder;
}

/**
 * Подробные поля в заказе
 */
export const MainDataList: FC<IProps> = ({order}) => {
    return (
        <Box>
            <DataItem label={'Дата'} value={order.date} hasUnderline={true} />
            <DataItem
                label={'Форма оплаты'}
                value={order.payment}
                hasUnderline={true}
            />
            <DataItem
                label={'Объект'}
                value={order.address}
                hasUnderline={true}
            />
            <DataItem
                label={'Вид сооружения:'}
                value={order.type}
                hasUnderline={true}
            />
            <DataItem
                label={'Объем'}
                value={order.volume}
                hasUnderline={true}
            />
            <DataItem
                label={'Высота'}
                value={order.septicDepth}
                hasUnderline={true}
            />
            <DataItem
                label={'Расстояние до септика от подъезда'}
                value={order.distanceToSeptic}
                hasUnderline={true}
            />

            {order.executor && (
                <>
                    <DataItem
                        label={'Исполнитель'}
                        value={order.executor.title}
                        hasUnderline={true}
                    />
                    <DataItem
                        label={'Телефон'}
                        value={order.executor.phone}
                        hasUnderline={true}
                    />
                </>
            )}

            {order.comment && (
                <DataItem
                    label={'Комментарий'}
                    value={order.comment}
                    hasUnderline={true}
                />
            )}
        </Box>
    );
};
