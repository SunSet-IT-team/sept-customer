import {Stack} from '@mui/material';
import {FC} from 'react';
import {useFormState} from 'react-hook-form-mui';
import {InputField, PasswordField} from '../../ui';
import {forgotPasswordInputsData} from '../data';
import {IForgotPasswordForm} from '../form.type';
import {formContainerStyles} from './styles';

export const ForgotPasswordFormContent: FC = () => {
    const {errors} = useFormState<IForgotPasswordForm>();

    return (
        <Stack sx={formContainerStyles}>
            {forgotPasswordInputsData.map(({label, name, type, required}) =>
                name === 'password' ? (
                    <PasswordField
                        key={name}
                        label={label}
                        name={name}
                        required={required}
                        error={!!errors[name as keyof IForgotPasswordForm]}
                        helperText={
                            errors[name as keyof IForgotPasswordForm]?.message
                        }
                    />
                ) : (
                    <InputField
                        key={name}
                        label={label}
                        name={name}
                        type={type}
                        required={required}
                        error={!!errors[name as keyof IForgotPasswordForm]}
                        helperText={
                            errors[name as keyof IForgotPasswordForm]?.message
                        }
                    />
                )
            )}
        </Stack>
    );
};
