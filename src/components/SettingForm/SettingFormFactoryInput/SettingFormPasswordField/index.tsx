import {useState, FC} from 'react';
import {
    IconButton,
    InputAdornment,
    TextFieldProps,
    Box,
    Typography,
    Stack,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import {TextFieldElement} from 'react-hook-form-mui';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import {useStyles, requiredAsteriskStyles} from './styles';

type SettingFormPasswordFieldProps = TextFieldProps & {
    editName: string;
    onClickEdit: (name: string) => void;
    labelPosition?: 'start' | 'center' | 'end';
};

/**
 * Поле для ввода и просмотра пароля
 */
export const SettingFormPasswordField: FC<SettingFormPasswordFieldProps> = ({
    label,
    labelPosition,
    name,
    required,
    error,
    helperText,
    editName,
    onClickEdit,
}) => {
    const [showPassword, setShowPassword] = useState(false);
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
                type={showPassword ? 'text' : 'password'}
                error={error}
                required={required}
                helperText={helperText}
                slotProps={{
                    input: {
                        readOnly: editName !== name,
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
                                <IconButton
                                    onClick={() =>
                                        onClickEdit(
                                            name == editName ? null : name
                                        )
                                    }
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                        ml: 1,
                                    }}
                                >
                                    {editName === name ? (
                                        <CheckIcon />
                                    ) : (
                                        <EditIcon />
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
