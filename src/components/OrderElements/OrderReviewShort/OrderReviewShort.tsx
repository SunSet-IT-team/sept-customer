import {
    Stack,
    Typography,
    Button,
    Rating,
    Divider,
    TextField,
    Box,
} from '@mui/material';
import {FC, useCallback} from 'react';
import {textFieldSx} from '../Form/styles';
import {deleteButtonSx, editButtonSx} from './styles';
import {useMediaQuery} from 'usehooks-ts';
import {useNavigate} from 'react-router-dom';
import {useActions} from '../../../hooks/useActions';
import {OrdersSlice} from '../../../app/store/orders/orders.slice';
import {IOrder} from '../../../types/order';

interface IProps {
    order_id: IOrder['id'];
    rating_score: number;
    review_text: string;
}

export const OrderReviewShort: FC<IProps> = ({
    order_id,
    rating_score,
    review_text,
}) => {
    const isMobileSmall = useMediaQuery('(max-width:480px)');
    const navigate = useNavigate();
    const {deleteReview} = useActions(OrdersSlice.actions);

    const editAction = useCallback(
        function () {
            navigate(`/orders/${order_id}/add-review`);
        },
        [navigate]
    );

    const deleteAction = useCallback(
        function () {
            deleteReview({order_id});
        },
        [deleteReview]
    );

    return (
        <Box>
            {/* Заголовок и рейтинг */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={'35px'}
                mb={1}
            >
                <Typography fontWeight={600}>Мой отзыв</Typography>
                <Rating readOnly value={rating_score} />
            </Stack>

            {/* Линия под заголовком */}
            <Divider color="#000" sx={{mb: '10px'}} />

            <TextField
                fullWidth
                multiline
                rows={4}
                variant="standard"
                defaultValue={review_text}
                sx={textFieldSx}
                slotProps={{input: {disableUnderline: true, readOnly: true}}}
            />

            <Stack
                direction={isMobileSmall ? 'column' : 'row'} // вертикально на xs, горизонтально на sm+
                spacing={isMobileSmall ? 1 : 2}
                justifyContent={isMobileSmall ? 'center' : 'space-between'}
                mt={'10px'}
            >
                <Button
                    variant="contained"
                    sx={editButtonSx}
                    onClick={editAction}
                >
                    Редактировать
                </Button>
                <Button
                    variant="contained"
                    sx={deleteButtonSx}
                    onClick={deleteAction}
                >
                    Удалить
                </Button>
            </Stack>
        </Box>
    );
};
