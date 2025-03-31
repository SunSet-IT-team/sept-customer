import {Visibility, VisibilityOff} from '@mui/icons-material';
import {IconButton, InputAdornment} from '@mui/material';
import {FC, useState} from 'react';
import {TextFieldElement} from 'react-hook-form-mui';
import {textFieldStyles} from './styles';

interface PasswordFieldProps {
    name: string;
    error?: boolean;
    helperText?: string;
}

export const PasswordField: FC<PasswordFieldProps> = ({
    name,
    error,
    helperText,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
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
                                onClick={() => setShowPassword((prev) => !prev)}
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
    );
};
