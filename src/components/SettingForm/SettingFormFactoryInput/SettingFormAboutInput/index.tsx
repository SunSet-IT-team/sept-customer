import {FC} from 'react';
import {TextFieldElementProps, TextFieldElement} from 'react-hook-form-mui';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import {InputAdornment, Box} from '@mui/material';

type SettingFormAboutInputProps = TextFieldElementProps & {
    editName: string;
    onClickEdit: (name: string) => void;
};

/**
 * Поле ввода с экрана регистрации
 */
export const SettingFormAboutInput: FC<SettingFormAboutInputProps> = ({
    label,
    name,
    type = 'text',
    required,
    error,
    helperText,
    editName,
    onClickEdit,
    ...rest
}) => (
    <TextFieldElement
        name={name}
        label={label}
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
                                onClickEdit(name == editName ? null : name)
                            }
                            sx={{
                                cursor: 'pointer',
                                color: 'primary.main',
                            }}
                        >
                            {editName === name ? <CheckIcon /> : <EditIcon />}
                        </Box>
                    </InputAdornment>
                ),
            },
        }}
    />
);
