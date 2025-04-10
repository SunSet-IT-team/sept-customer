import {Box, Button, Paper, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {statusButtonSx, actionButtonSx, OrderCardSx} from './styles';
import {Link} from 'react-router-dom';

interface IOrderCardProps {
    number: string;
    date: string;
    service: string;
    status: 'В работе' | 'Выполнен';
    actionHref: string;
    withReview: boolean;
}

export const OrderCard: FC<IOrderCardProps> = ({
    number,
    date,
    service,
    status,
    actionHref,
    withReview,
}) => {
    const actionLabel = withReview ? "Посмотреть" : status === 'В работе' ? 'Обсудить' : 'Оценить';

    return (
        <Paper sx={OrderCardSx} elevation={0}>
            <Stack direction="row" spacing={2}>
                <Box flex={'1 1 auto'}>
                    <Typography
                        fontWeight="600"
                        fontSize="18px"
                        variant="h6"
                        sx={{
                            opacity: 0.8,
                            mb: '20px',
                        }}
                    >
                        Заявка №{number}
                    </Typography>
                    <Typography fontSize="14px">
                        <strong>Дата:</strong> {date}
                    </Typography>
                    <Typography fontSize="14px">
                        <strong>Услуга:</strong> {service}
                    </Typography>
                </Box>
                <Box
                    flex={'0 1 139px'}
                    textAlign="right"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <Button
                        disableElevation
                        variant="contained"
                        disabled
                        sx={statusButtonSx}
                    >
                        {status}
                    </Button>
                    <Button
                        disableElevation
                        variant="contained"
                        sx={actionButtonSx}
                        component={Link}
                        to={actionHref}
                    >
                        {actionLabel}
                    </Button>
                </Box>
            </Stack>
        </Paper>
    );
};
