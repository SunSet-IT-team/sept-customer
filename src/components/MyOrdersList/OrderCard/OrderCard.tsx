import {Box, Button, Paper, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useStyles} from './styles';
import {Link} from 'react-router-dom';
import {IOrder, OrderStatus} from '../../../types/order';
import {
    formatOrderStatus,
    formatOrderStatusButton,
} from '../../../utils/formaters';

interface IOrderCardProps {
    order: IOrder;
}

export const OrderCard: FC<IOrderCardProps> = ({order}) => {
    const styles = useStyles();

    return (
        <Paper sx={styles.OrderCardSx} elevation={0}>
            <Stack direction="row" spacing={2}>
                <Box
                    flex={'1 1 auto'}
                    component={Link}
                    to={`/order/${order.id}`}
                    sx={styles.text}
                >
                    <Typography variant="h6" sx={styles.title}>
                        Заявка №{order.id}
                    </Typography>
                    <Typography sx={styles.label}>
                        <strong>Дата:</strong> {order.date}
                    </Typography>
                    <Typography sx={styles.label}>
                        <strong>Услуга:</strong> {order.service.name}
                    </Typography>
                </Box>
                <Box sx={styles.buttons}>
                    <Button
                        disableElevation
                        variant="contained"
                        disabled
                        sx={styles.statusButtonSx}
                    >
                        {formatOrderStatus(order.status)}
                    </Button>
                    <Button
                        disableElevation
                        variant="contained"
                        sx={styles.actionButtonSx}
                        component={Link}
                        to={`/order/${order.id}`}
                    >
                        {formatOrderStatusButton(order)}
                    </Button>
                </Box>
            </Stack>
        </Paper>
    );
};
