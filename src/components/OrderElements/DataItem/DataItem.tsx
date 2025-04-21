import {Box, Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useStyles} from './styles';

interface IProps {
    label: string;
    value: string;
    hasUnderline: boolean;
    [props: string]: any;
}

export const DataItem: FC<IProps> = ({
    label,
    value,
    hasUnderline,
    ...props
}) => {
    const styles = useStyles();

    return (
        <Box {...props}>
            <Stack
                direction="row"
                justifyContent="space-between"
                px={2}
                py={1.5}
                sx={hasUnderline ? styles.root_with_underline : styles.root}
            >
                <Typography sx={styles.name}>
                    <strong>{label}</strong>
                </Typography>
                <Typography sx={styles.value}>{value}</Typography>
            </Stack>
        </Box>
    );
};
