import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {ConfirmOrderForm} from '../../components/ConfirmOrder/ConfirmOrderForm';
import {PageTitle} from '../../components/PageTitle/PageTitle';

export const ConfirmOrder: FC = () => {
    return (
        <Box px={'40px'} py={'26px'}>
            <Helmet>
                <title>Подтверждение данных</title>
            </Helmet>
            <PageTitle title="Подтверждение данных" />
            <Box>
                <ConfirmOrderForm />
            </Box>
        </Box>
    );
};
