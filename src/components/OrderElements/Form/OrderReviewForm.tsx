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
import {useFetchOrderById} from '../../../hooks/Orders/useFetchOrderById';
import {Spinner} from '../../Spinner/Spinner';
import {useReviewMutations} from '../../../hooks/Review/useReview';

export const OrderReviewForm: FC = () => {
    const {orderId} = useParams();

    if (!orderId) return <Navigate to={'/'} replace />;

    const {data: order, isLoading, isError} = useFetchOrderById(orderId);
    const mutation = useReviewMutations(orderId);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError || !order) return <Navigate to={'/'} replace />;

    const navigate = useNavigate();

    const submitReview = useCallback(
        (reviewData: Required<INewReveiwForm>) => {
            mutation.addReview(reviewData);
            return navigate(`/order/${orderId}`);
        },
        [navigate, orderId]
    );

    const defaultValues = order.review || newReviewDefaultValues;

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
