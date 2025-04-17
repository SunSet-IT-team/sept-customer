import {
    Stack,
    Typography,
    Button,
    Rating,
    Divider,
    TextField,
} from '@mui/material';
import {FC, useCallback} from 'react';
import {Controller, FormContainer} from 'react-hook-form-mui';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {submitButtonSx, textFieldSx} from './styles';
import {zodResolver} from '@hookform/resolvers/zod';
import {INewReveiwForm, newReveiwFormShema} from './shema';
import {newReviewDefaultValues} from './data';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {useActions} from '../../../hooks/useActions';
import {OrdersSlice} from '../../../app/store/orders/orders.slice';

export const OrderReviewForm: FC = () => {
    const {order_id} = useParams();
    if (!order_id) return <Navigate to={'/'} replace />;

    const formData = useTypedSelector(
        (state) =>
            state.orders.orders.find((order) => order.id === order_id)?.review
    );
    const {addReview} = useActions(OrdersSlice.actions);

    const navigate = useNavigate();
    const submitReview = useCallback(
        function (reviewData: INewReveiwForm) {
            // Тут будет логика, связанная с отправкой данных отзыва
            addReview({order_id, formData: reviewData});
            return navigate('../review', {relative: 'path'});
        },
        [navigate]
    );

    const defaultValues = formData || newReviewDefaultValues;

    return (
        <FormContainer
            onSuccess={submitReview}
            resolver={zodResolver(newReveiwFormShema)}
            defaultValues={defaultValues}
            mode="onSubmit"
        >
            {/* Заголовок и рейтинг */}
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={'35px'}
                mb={1}
            >
                <Typography fontWeight={600}>Текст отзыва</Typography>
                <Controller
                    name="rating"
                    render={({field, fieldState}) => (
                        <div>
                            <Rating
                                name={field.name}
                                value={field.value}
                                onChange={(_, value) =>
                                    field.onChange(value ?? 0)
                                }
                            />
                            {fieldState?.error && (
                                <Typography color="error" variant="body2">
                                    {fieldState.error.message}
                                </Typography>
                            )}
                        </div>
                    )}
                />
            </Stack>

            {/* Линия под заголовком */}
            <Divider color="#000" sx={{mb: '10px'}} />

            {/* Подключаем TEXTFIELD */}
            <Controller
                name="text"
                render={({field, fieldState}) => (
                    <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        variant="standard"
                        placeholder="Введите текст..."
                        {...field}
                        sx={textFieldSx}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        slotProps={{input: {disableUnderline: true}}}
                    />
                )}
            />

            <Button
                variant="contained"
                fullWidth
                sx={submitButtonSx}
                type="submit"
            >
                Отправить
            </Button>
        </FormContainer>
    );
};
