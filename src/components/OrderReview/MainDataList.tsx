import {Box} from '@mui/material';
import {DataItem} from './DataItem';
import {IOrderData} from '../../pages/OrderReview/orderReview.interfaces';
import {FC} from 'react';

interface IProps {
    data: IOrderData;
}

export const MainDataList: FC<IProps> = ({data}) => {
    return (
        <Box sx={{overflow: 'hidden'}}>
            {[
                ['Дата', data.date],
                ['Форма оплаты', data.payment],
                ['Объект', data.address],
                ['Комментарий', data.comment],
                ['Телефон', data.phone],
                ['Исполнитель', data.performer],
                ['Объем', data.volume],
                ['Вид сооружения', data.type],
            ].map(([label, value], i, arr) => {
                const isDivider = i !== arr.length - 1;
                return (
                    <DataItem
                        key={label}
                        label={label}
                        value={value}
                        isDivider={isDivider}
                    />
                );
            })}
        </Box>
    );
};
