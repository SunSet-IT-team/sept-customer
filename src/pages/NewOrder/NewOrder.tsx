import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {NewOrderForm} from '../../components/OrderForm/NewOrderForm';
import {PageTitle} from '../../components/PageTitle/PageTitle';

export const NewOrder: FC = () => {
    return (
        <Box px={'40px'} py={'26px'}>
            <Helmet>
                <title>Новый заказ</title>
            </Helmet>
            <PageTitle title="Новый заказ" />
            <Box>
                <NewOrderForm />
            </Box>
        </Box>
    );
};
