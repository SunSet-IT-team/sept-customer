import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {ConfirmationForm} from '../../components/ConfirmationForm/ConfirmationForm';
import {PageTitle} from '../../components/PageTitle/PageTitle';
import {useResetPassword} from '../../hooks/useResetPassword';
import {useTypedSelector} from '../../hooks/useTypedSelector';

export const Confirmation: FC = () => {
    const {email, new_password, userId} = useTypedSelector(
        (state) => state.resetPassword
    );

    const {mutateAsync} = useResetPassword();
    const handleResendCode = () => {
        if (userId !== null) {
            mutateAsync({
                email,
                new_password,
                userId,
            });
        }
    };
    return (
        <>
            <Helmet>
                <title>Код подтверждения</title>
            </Helmet>
            <Box
                position={'relative'}
                py={'26px'}
                px={'33px'}
                minHeight={'100dvh'}
                display={'flex'}
                flexDirection={'column'}
            >
                <PageTitle title="Код подтверждения" />
                <Stack direction={'column'} gap={'25px'} my={'auto'}>
                    <Typography variant="body1" textAlign={'center'}>
                        Введите код подтверждения
                    </Typography>
                    <ConfirmationForm />
                    <Stack
                        direction={'row'}
                        gap={'5px'}
                        justifyContent={'center'}
                    >
                        <Typography variant="body2" textAlign={'center'}>
                            Не пришёл код?
                        </Typography>
                        <Typography
                            variant="body2"
                            textAlign={'center'}
                            onClick={handleResendCode}
                        >
                            Отправить ещё раз
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};
