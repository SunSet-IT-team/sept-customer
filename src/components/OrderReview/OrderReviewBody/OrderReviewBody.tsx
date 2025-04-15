import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {MainDataList} from '../MainDataList/MainDataList';
import {ActionButton} from '../ActionButton/ActionButton';
import {titleBefDataSx} from './styles';
import {IOrder} from '../../../types/order';

interface IProps {
    data: IOrder;
    isConfirmed: boolean;
    isReview: boolean;
}

export const OrderReviewBody: FC<IProps> = ({data, isConfirmed, isReview}) => {
    return (
        <>
            <Box mt={'40px'}>
                {/* Услуга и статус */}
                <Stack spacing={1} mb={3}>
                    <Typography>
                        <strong>Услуга:</strong> {data.service.name}
                    </Typography>
                    <Typography>
                        <strong>Статус:</strong>{' '}
                        {isConfirmed ? 'Заявка принята' : 'Выполнен'}
                    </Typography>
                </Stack>

                {/* Общие данные */}
                <Typography variant="h6" sx={titleBefDataSx}>
                    Общие данные
                </Typography>
            </Box>

            <MainDataList data={data} />

            {!isReview && (
                <>
                    <ActionButton isConfirmed={isConfirmed} />
                </>
            )}
        </>
    );
};
