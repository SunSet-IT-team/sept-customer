import {Stack} from '@mui/material';
import {FC} from 'react';
import {resetInputsData} from '../data';
import {stackStyles} from './styles';
import {inputStackStyles} from '../../OrderForm/NewOrderFormContent/styles';
import {PasswordField, InputField} from '../../ui';

/**
 * Поля для сброса пароля
 */
export const ResetFormContent: FC = () => {
    return (
        <Stack sx={stackStyles}>
            {resetInputsData.map((el) => (
                <Stack key={el.label} sx={inputStackStyles}>
                    {el.name === 'password' ? (
                        <PasswordField
                            label={el.label}
                            name={el.name}
                            type={el.type}
                            required={el.required}
                        />
                    ) : (
                        <InputField
                            label={el.label}
                            name={el.name}
                            type={el.type}
                            required={el.required}
                        />
                    )}
                </Stack>
            ))}
        </Stack>
    );
};
