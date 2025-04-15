import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {IOrder} from '../../types/order';
import {dataFields} from './dataFields';

interface IProps {
    order_data: IOrder;
}

/**
 * Верхняя часть с краткой информацией об заказе.
 * Испльзуется на странице создания нового отзыва.
 */
export const OrderInfo: FC<IProps> = ({order_data}) => {
    return (
        <Box>
            {dataFields.map(([label, key]) => {
                return (
                    <Typography
                        key={label}
                        sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                        }}
                    >{`${label}: ${order_data[key]}`}</Typography>
                );
            })}
        </Box>
    );
};
