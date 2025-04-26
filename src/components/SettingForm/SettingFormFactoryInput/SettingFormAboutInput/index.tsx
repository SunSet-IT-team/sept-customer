import {FC} from 'react';
import {TextFieldElementProps, TextFieldElement} from 'react-hook-form-mui';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import {InputAdornment, Box, Stack, Typography} from '@mui/material';
import {useStyles, requiredAsteriskStyles} from './styles';

type SettingFormAboutInputProps = TextFieldElementProps & {
    editName: string;
    onClickEdit: (name: string) => void;
    labelPosition?: 'start' | 'center' | 'end';
};

/**
 * Поле ввода с экрана регистрации
 */
export const SettingFormAboutInput: FC<SettingFormAboutInputProps> = ({
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
                multiline
                fullWidth
                rows={7}
                placeholder="Введите текст..."
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
