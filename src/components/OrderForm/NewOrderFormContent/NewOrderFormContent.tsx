import {Stack} from '@mui/material';
import {FC} from 'react';
import {useFormState} from 'react-hook-form-mui';
import {InputField} from '../../ui';
import {SelectField} from '../../ui/Inputs/SelectField/SelectField';
import {newOrderInputsData, paymentTypes} from '../data';
import {INewOrderForm} from '../schema';
import {inputStackStyles, stackContainerStyles} from './styles';

export const NewOrderFormContent: FC = () => {
    const {errors} = useFormState<INewOrderForm>();

    return (
        <Stack sx={stackContainerStyles}>
            {newOrderInputsData.map(({label, name, required, type}) => (
                <Stack key={label} sx={inputStackStyles}>
                    {name === 'payment_type' ? (
                        <SelectField
                            label={label}
                            name={name}
                            error={!!errors[name as keyof INewOrderForm]}
                            helperText={
                                errors[name as keyof INewOrderForm]?.message
                            }
                            required={required}
                            options={paymentTypes}
                            labelPosition="start"
                        />
                    ) : (
                        <InputField
                            name={name}
                            type={type || 'text'}
                            error={!!errors[name as keyof INewOrderForm]}
                            helperText={
                                errors[name as keyof INewOrderForm]?.message
                            }
                            required={required}
                            label={label}
                            labelPosition="start"
                        />
                    )}
                </Stack>
            ))}
        </Stack>
    );
};
