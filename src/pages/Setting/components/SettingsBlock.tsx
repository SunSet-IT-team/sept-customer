import React, {useState} from 'react';
import {Box, InputAdornment, TextField, Typography} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

interface FieldProps {
    label: string;
    value: string;
}

export const SettingsBlock: React.FC<{onEdit: () => void}> = ({onEdit}) => {
    const [fields, setFields] = useState<FieldProps[]>([
        {label: 'ФИО', value: 'Иванов Иван Иванович'},
        {label: 'E-mail', value: 'ivanov@example.com'},
        {label: 'Телефон', value: '+7 (999) 123-45-67'},
        {label: 'Пароль', value: '••••••••'},
    ]);

    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const handleEdit = (index: number) => {
        if (editingIndex === index) {
            // Сохраняем изменения
            setEditingIndex(null);
            onEdit();
        } else {
            // Начинаем редактирование
            setEditingIndex(index);
        }
    };

    const handleChange = (index: number, value: string) => {
        const newFields = [...fields];
        newFields[index].value = value;
        setFields(newFields);
    };

    return (
        <Box>
            {fields.map((field, index) => (
                <Box
                    key={field.label}
                    sx={{mb: 2, display: 'flex', alignItems: 'center'}}
                >
                    <TextField
                        label={field.label}
                        value={field.value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        disabled={editingIndex !== index}
                        fullWidth
                        variant="outlined"
                        sx={{mr: 2}}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Box
                                            onClick={() => handleEdit(index)}
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'primary.main',
                                            }}
                                        >
                                            {editingIndex === index ? (
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
                </Box>
            ))}
        </Box>
    );
};
