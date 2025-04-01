import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {Helmet} from 'react-helmet-async';
import {useNavigate} from 'react-router-dom';
import {ForgotPasswordForm} from '../../components/ForgotPassword/ForgotPasswordForm';
import {
    backButton,
    descriptionText,
    forgotPasswordContainer,
    headerStack,
} from './syles';

export const ForgotPassword: FC = () => {
    const navigate = useNavigate();
    const toBack = () => {
        navigate(-1);
    };

    return (
        <>
            <Helmet>
                <title>Сменить пароль</title>
            </Helmet>
            <Box sx={forgotPasswordContainer}>
                <Stack sx={headerStack}>
                    <ArrowBackIosNewRoundedIcon
                        sx={backButton}
                        onClick={toBack}
                    />
                    <Typography variant="h6" sx={{fontWeight: 500}}>
                        Сменить пароль
                    </Typography>
                </Stack>
                <Box my="auto">
                    <Typography sx={descriptionText}>
                        Укажите e-mail, указанный при регистрации, и новый
                        пароль. На почту придет код подтверждения.
                    </Typography>
                    <ForgotPasswordForm />
                </Box>
            </Box>
        </>
    );
};
