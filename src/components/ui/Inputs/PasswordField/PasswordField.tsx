import {Visibility, VisibilityOff} from '@mui/icons-material';
import {IconButton, InputAdornment, Stack, Typography} from '@mui/material';
import {FC, useState} from 'react';
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

export const PasswordField: FC<IProps> = ({
    label,
    name,
    required,
    error,
    helperText,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Stack width="100%">
            <Typography variant="subtitle1" sx={labelStyles}>
                {label}
                {label && required && (
                    <span style={requiredAsteriskStyles}>*</span>
                )}
            </Typography>
            <TextFieldElement
                name={name}
                variant="outlined"
                fullWidth
                type={showPassword ? 'text' : 'password'}
                error={error}
                helperText={helperText}
                sx={textFieldStyles}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowPassword((prev) => !prev)
                                    }
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Stack>
    );
};
