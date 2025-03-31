import {Stack} from '@mui/material';
import {FC} from 'react';
import {useFormState} from 'react-hook-form-mui';
import {InputField, PasswordField} from '../../ui';
import {signUpInputsData} from '../data';
import {IRegisterForm} from '../form.type';
import {FormCheckbox} from './Checkbox';
import {formContainerStyles} from './styles';

export const SignUpFormContent: FC = () => {
    const {errors} = useFormState<IRegisterForm>();

    return (
        <Stack sx={formContainerStyles} spacing="10px">
            {signUpInputsData.map(({label, name, type, required}) =>
                name === 'password' ? (
                    <PasswordField
                        key={name}
                        label={label}
                        name={name}
                        required={required}
                        error={!!errors[name]}
                        helperText={errors[name]?.message}
                    />
                ) : (
                    <InputField
                        key={name}
                        label={label}
                        name={name}
                        type={type}
                        required={required}
                        error={!!errors[name as keyof IRegisterForm]}
                        helperText={
                            errors[name as keyof IRegisterForm]?.message
                        }
                    />
                )
            )}
            <FormCheckbox error={errors.processingDataAccepted?.message} />
        </Stack>
    );
};
