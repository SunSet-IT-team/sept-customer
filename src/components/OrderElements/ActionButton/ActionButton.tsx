import {Box, Button} from '@mui/material';
import {FC, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {actionButtonSx} from './styles';

interface IProps {
    isChatButton: boolean;
    orderId: string | number;
}

export const ActionButton: FC<IProps> = ({isChatButton, orderId}) => {
    const navigate = useNavigate();

    const onClick = useCallback(
        function () {
            if (isChatButton) return navigate(`/order/chat/${orderId}`);
            else return navigate(`/order/add-review/${orderId}`);
        },
        [isChatButton]
    );

    return (
        <Box mt={'45px'}>
            <Button
                variant="contained"
                fullWidth
                sx={actionButtonSx}
                onClick={onClick}
            >
                {isChatButton ? 'Открыть чат' : 'Оставить отзыв'}
            </Button>
        </Box>
    );
};
