import {TextField, InputAdornment, Box} from '@mui/material';
import {Search} from '@mui/icons-material';
import {FC, ChangeEvent} from 'react';
import {useStyles} from './styles';

interface InputSearchProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

/**
 * Инпут исползоваемый для поиска
 */
export const InputSearch: FC<InputSearchProps> = ({
    value,
    onChange,
    placeholder = 'Найти услугу...',
}) => {
    const styles = useStyles();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <TextField
            id="outlined-basic"
            value={value}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            type="text"
            placeholder={placeholder}
            sx={styles.input}
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end" sx={styles.iconWrapper}>
                            <Box sx={styles.icon}>
                                <Search sx={styles.iconContent} />
                            </Box>
                        </InputAdornment>
                    ),
                },
            }}
        />
    );
};
