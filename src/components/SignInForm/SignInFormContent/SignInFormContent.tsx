import {Stack} from '@mui/material';
import {FC} from 'react';
import {InputField, PasswordField} from '../../ui';
import {signInInputsData} from '../data';
import {inputStackStyles, stackStyles} from './styles';

export const SignInFormContent: FC = () => {
    return (
        <Stack sx={stackStyles}>
            {signInInputsData.map(({label, name, type, required}) => (
                <Stack key={label} sx={inputStackStyles}>
                    {name === 'password' ? (
                        <PasswordField
                            label={label}
                            name={name}
                            type={type}
                            required={required}
                        />
                    ) : (
                        <InputField
                            label={label}
                            name={name}
                            type={type}
                            required={required}
                        />
                    )}
                </Stack>
            ))}
        </Stack>
    );
};
