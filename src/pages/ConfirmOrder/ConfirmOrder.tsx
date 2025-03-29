import {Box} from '@mui/material';
import {FC, useEffect} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {ConfirmOrderForm} from '../../components/ConfirmOrder/ConfirmOrderForm';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const ConfirmOrder: FC = () => {
    const navigate = useNavigate();
    const {formData, executor, service} = useTypedSelector(
        (state) => state.newOrderForm
    );
    useEffect(() => {
        if (!formData || !service || !executor) {
            navigate('/');
        }
    }, [formData]);
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
