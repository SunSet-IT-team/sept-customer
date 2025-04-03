import {Box, FormHelperText} from '@mui/material';
import {MuiOtpInput} from 'mui-one-time-password-input';
import {FC} from 'react';
import {helperTextStyles, otpInputStyles} from './styles';
import {ControllerRenderProps} from 'react-hook-form-mui';
import {IConfirmationForm} from '../../../ConfirmationForm/form.type';

export const OtpField: FC<{
    field: ControllerRenderProps<IConfirmationForm>;
    errorMessage?: string;
}> = ({field, errorMessage}) => (
    <Box>
        <MuiOtpInput
            sx={otpInputStyles}
            {...field}
            length={5}
            justifyContent={'center'}
            TextFieldsProps={{
                error: !!errorMessage,
                type: 'number',
            }}
        />
        {errorMessage && (
            <FormHelperText error sx={helperTextStyles}>
                {errorMessage}
            </FormHelperText>
        )}
    </Box>
);
