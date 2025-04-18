import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {NewOrderForm} from '../../components/OrderForm/NewOrderForm';
import {BackLayout} from '../layouts/BackLayout';

export const NewOrder: FC = () => {
    return (
        <>
            <Helmet>
                <title>Новый заказ</title>
            </Helmet>
            <BackLayout title="Новый заказ">
                <Box>
                    <NewOrderForm />
                </Box>
            </BackLayout>
        </>
    );
};
