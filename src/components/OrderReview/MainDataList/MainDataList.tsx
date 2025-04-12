import {Box} from '@mui/material';
import {DataItem} from '../DataItem/DataItem';
import {FC} from 'react';
import { dataFields } from './dataFields';
import { IOrderFullInfo } from '../../../types/order';

interface IProps {
    data: IOrderFullInfo;
}

export const MainDataList: FC<IProps> = ({data}) => {
    return (
        <Box sx={{overflow: 'hidden'}}>
            {dataFields.map(([label, key], i, arr) => {
                const hasUnderline = i !== arr.length - 1;
                return (
                    <DataItem
                        key={label}
                        label={label}
                        value={data[key]}
                        hasUnderline={hasUnderline}
                    />
                );
            })}
        </Box>
    );
};
