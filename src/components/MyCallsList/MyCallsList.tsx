import {Box, Stack} from '@mui/material';
import {FC} from 'react';
import {OrderCard} from './OrderCard/OrderCard';

interface IProps {
    calls: any;
}

export const MyCallsList: FC<IProps> = ({calls}) => {

    return (
        <Stack spacing={'25px'} mt={'25px'}>
            {calls.map(({id, date, orderName, status}: any) => {
              const actionHref = status === "В работе" ? `/order/${id}/chat` : `/order/${id}/review`

                return (
                    <Box key={id}>
                        <OrderCard
                            number={id}
                            date={date}
                            service={orderName}
                            status={status}
                            actionHref={actionHref}
                        />
                    </Box>
                );
            })}
        </Stack>
    );
};
