import {
    Stack,
    Typography,
    Button,
    Rating,
    Divider,
    TextField,
} from '@mui/material';
import {FC, useEffect} from 'react';
import {Controller, FormContainer, useForm} from 'react-hook-form-mui';
import {Navigate, useParams} from 'react-router-dom';
import {submitButtonSx, textFieldSx} from './styles';
import {zodResolver} from '@hookform/resolvers/zod';
import {INewReveiwForm, newReveiwFormShema} from './shema';
import {newReviewDefaultValues} from './data';
import {useFetchOrderById} from '../../../hooks/Orders/useFetchOrderById';
import {Spinner} from '../../Spinner/Spinner';
import {useReviewMutations} from '../../../hooks/Review/useReview';
import {useHandleBack} from '../../../hooks/useHandleBack';

export const OrderReviewForm: FC = () => {
    const {orderId} = useParams();

    const {data: order, isLoading, isError} = useFetchOrderById(orderId);
    const mutation = useReviewMutations(orderId);
    const {handleBack} = useHandleBack();

    // Используем useForm вместо FormContainer для большего контроля
    const formContext = useForm<INewReveiwForm>({
        defaultValues: newReviewDefaultValues, // Устанавливаем дефолтные значения сразу
        resolver: zodResolver(newReveiwFormShema),
    });

    useEffect(() => {
        if (order) {
            formContext.reset(order.review || newReviewDefaultValues);
        }
    }, [order, formContext]);

    if (!orderId) return <Navigate to={'/'} replace />;

    if (isLoading) {
        return <Spinner />;
    }

    if (isError || !order) return <Navigate to={'/'} replace />;

    const submitReview = (reviewData: Required<INewReveiwForm>) => {
        if (order.review) {
            mutation.changeReview({
                reviewId: order.review.id,
                params: reviewData,
            });
        } else {
            mutation.addReview(reviewData);
        }
        handleBack();
    };
    return (
        <FormContainer
            formContext={formContext}
            onSuccess={submitReview}
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
