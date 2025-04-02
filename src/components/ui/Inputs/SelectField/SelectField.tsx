import {Typography} from '@mui/material';
import {FC} from 'react';
import {SelectElement, SelectElementProps} from 'react-hook-form-mui';
import {asteriskStyles, labelStyles, selectFieldStyles} from './styles';

interface IProps extends SelectElementProps {
    labelPosition?: 'start' | 'center' | 'end';
}

export const SelectField: FC<IProps> = ({
    labelPosition = 'center',
    label,
    name,
    required,
    error,
    helperText,
    options,
}) => (
    <>
        <Typography
            variant="subtitle1"
            sx={labelStyles}
            textAlign={labelPosition}
        >
            {label}
            {required && <span style={asteriskStyles}>*</span>}
        </Typography>
        <SelectElement
            name={name}
            variant="outlined"
            fullWidth
            error={error}
            helperText={helperText}
            required={required}
            options={options}
            sx={selectFieldStyles}
        />
    </>
);
