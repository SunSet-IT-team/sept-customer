import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {TextFieldElement} from 'react-hook-form-mui';
import {labelStyles, requiredAsteriskStyles, textFieldStyles} from './styles';

interface IProps {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
}

export const InputField: FC<IProps> = ({
    label,
    name,
    type = 'text',
    required,
    error,
    helperText,
}) => (
    <Stack width="100%">
        <Typography variant="subtitle1" sx={labelStyles}>
            {label}
            {required && <span style={requiredAsteriskStyles}>*</span>}
        </Typography>
        <TextFieldElement
            name={name}
            variant="outlined"
            fullWidth
            type={type}
            error={error}
            helperText={helperText}
            required={required}
            sx={textFieldStyles}
        />
    </Stack>
);
