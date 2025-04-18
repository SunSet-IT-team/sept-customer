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
import {IOrder} from '../../../types/order';
import {IReview} from '../../../types/executor';
import {useReviewMutations} from '../../../hooks/Review/useReview';

interface IProps {
    orderId: IOrder['id'] | number;
    review: IReview;
}

export const OrderReviewShort: FC<IProps> = ({orderId, review}) => {
    const isMobileSmall = useMediaQuery('(max-width:480px)');
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

    console.log(review);

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
