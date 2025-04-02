import {Box, FormHelperText} from '@mui/material';
import {MuiOtpInput} from 'mui-one-time-password-input';
import {FC} from 'react';
import {helperTextStyles, otpInputStyles} from './styles';

export const OtpField: FC<{field: any; errorMessage?: string}> = ({
    field,
    errorMessage,
}) => (
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
