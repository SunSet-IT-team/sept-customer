import {InputAdornment, Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {TextFieldElementProps, TextFieldElement} from 'react-hook-form-mui';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import {requiredAsteriskStyles, useStyles} from './styles';

type SettingFormInputFieldProps = TextFieldElementProps & {
    editName: string;
    onClickEdit: (name: string) => void;
    labelPosition?: 'start' | 'center' | 'end';
};

/**
 * Поле ввода с экрана регистрации
 */
export const SettingFormInputField: FC<SettingFormInputFieldProps> = ({
    label,
    labelPosition,
    name,
    type = 'text',
    required,
    error,
    helperText,
    editName,
    onClickEdit,
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
                {...rest}
                slotProps={{
                    input: {
                        readOnly: editName !== name,
                        endAdornment: (
                            <InputAdornment position="end">
                                <Box
                                    onClick={() =>
                                        onClickEdit(
                                            name == editName ? null : name
                                        )
                                    }
                                    sx={{
                                        cursor: 'pointer',
                                        color: 'primary.main',
                                    }}
                                >
                                    {editName === name ? (
                                        <CheckIcon />
                                    ) : (
                                        <EditIcon />
                                    )}
                                </Box>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Stack>
    );
};
