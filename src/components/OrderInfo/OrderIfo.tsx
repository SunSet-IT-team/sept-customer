import {Box, Typography} from '@mui/material';
import {FC} from 'react';

interface IProps {
    order_data: any;
}

export const OrderInfo: FC<IProps> = ({order_data}) => {
    return (
        <Box>
            {[
                ['Дата', order_data.date],
                ['Услуга', order_data.type],
                ['Статус', order_data.status],
                ['Исполнитель', order_data.executor],
            ].map(([label, value]) => {
                return (
                    <Typography
                        key={label}
                        sx={{
                            fontWeight: '500',
                            fontSize: '20px',
                        }}
                    >{`${label}: ${value}`}</Typography>
                );
            })}
        </Box>
    );
};
