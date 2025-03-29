import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {
    SelectElement,
    TextFieldElement,
    useFormState,
} from 'react-hook-form-mui';
import {INewOrderForm} from '../OrderForm/schema';
import {newOrderInputsData, paymentTypes} from './data';
import {IOrder} from './type';

export const ConfirmOrderFormContent: FC = () => {
    const {errors} = useFormState<IOrder>();

    return (
        <Stack alignItems="center" mt={3} spacing="10px" width="100%">
            {newOrderInputsData.map(({label, name, required, type}) => (
                <Stack key={label} width="100%">
                    <Typography
                        variant="subtitle1"
                        sx={{
                            mb: 1,
                            fontWeight: 500,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {label}
                        {required && (
                            <span style={{color: 'red', marginLeft: '2px'}}>
                                *
                            </span>
                        )}
                    </Typography>

                    {name === 'payment_type' ? (
                        <SelectElement
                            name={name}
                            variant="outlined"
                            fullWidth
                            error={!!errors[name as keyof INewOrderForm]}
                            helperText={
                                errors[name as keyof INewOrderForm]?.message
                            }
                            required={required}
                            options={paymentTypes}
                            disabled
                        />
                    ) : (
                        <TextFieldElement
                            name={name}
                            variant="outlined"
                            fullWidth
                            type={type || 'text'}
                            error={!!errors[name as keyof INewOrderForm]}
                            helperText={
                                errors[name as keyof INewOrderForm]?.message
                            }
                            required={required}
                            sx={{'& .MuiInputBase-input': {padding: '10px'}}}
                            disabled
                        />
                    )}
                </Stack>
            ))}
        </Stack>
    );
};
