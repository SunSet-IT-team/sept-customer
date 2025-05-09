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
import {useNavigate} from 'react-router-dom';
import {IOrder} from '../../../types/order';
import {IReview} from '../../../types/executor';
import {useReviewMutations} from '../../../hooks/Review/useReview';

interface IProps {
    orderId: IOrder['id'] | number;
    review: IReview;
}

export const OrderReviewShort: FC<IProps> = ({orderId, review}) => {
    const navigate = useNavigate();
    const mutation = useReviewMutations(orderId);

    const editAction = useCallback(
        function () {
            navigate(`/order/add-review/${orderId}`);
        },
        [navigate]
    );

    const deleteAction = useCallback(function () {
        mutation.deleteReview(review.id);
    }, []);

    return (
        <Box>
            {/* Заголовок и рейтинг */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={'30px'}
                mb={'2px'}
            >
                <Typography fontWeight={600}>Мой отзыв</Typography>
                <Rating readOnly value={review.rating} />
            </Stack>

            {/* Линия под заголовком */}
            <Divider color="#000" sx={{mb: '10px'}} />

            <TextField
                fullWidth
                multiline
                rows={4}
                variant="standard"
                value={review.text}
                sx={textFieldSx}
                slotProps={{input: {disableUnderline: true, readOnly: true}}}
            />

            <Stack
                direction={'row'}
                spacing={2}
                justifyContent={'space-between'}
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
