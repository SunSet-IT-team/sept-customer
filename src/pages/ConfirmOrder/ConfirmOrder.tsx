import {Box} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {ConfirmOrderForm} from '../../components/ConfirmOrder/ConfirmOrderForm';
import {BackLayout} from '../layouts/BackLayout';

/**
 * Страница подтверждения данных
 */
export const ConfirmOrder: FC = () => {
    return (
        <>
            <Helmet>
                <title>Подтверждение данных</title>
            </Helmet>
            <BackLayout title="Подтверждение данных">
                <Box>
                    <ConfirmOrderForm />
                </Box>
            </BackLayout>
        </>
    );
};
