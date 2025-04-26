import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {TextFieldElement, TextFieldElementProps} from 'react-hook-form-mui';
import {useStyles, requiredAsteriskStyles} from './styles';

interface IProps extends TextFieldElementProps {
    labelPosition?: 'start' | 'center' | 'end';
}

export const InputField: FC<IProps> = ({
    labelPosition = 'center',
    label,
    name,
    type = 'text',
    required,
    error,
    helperText,
    ...rest
}) => {
    const styles = useStyles();

    return (
        <Stack sx={styles.input}>
            <Typography
                variant="subtitle1"
                sx={styles.labelStyles}
                textAlign={labelPosition}
            >
                {label}
                {label && required && (
                    <span style={requiredAsteriskStyles}>*</span>
                )}
            </Typography>
            <TextFieldElement
                name={name}
                variant="outlined"
                fullWidth
                type={type}
                error={error}
                helperText={helperText}
                required={required}
                sx={styles.textFieldStyles}
                {...rest}
            />
        </Stack>
    );
};
