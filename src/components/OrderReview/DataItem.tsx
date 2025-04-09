import {Box, Divider, Stack, Typography} from '@mui/material';
import {FC} from 'react';

interface IProps {
    label: string;
    value: string;
    isDivider: boolean;
    [props: string]: any;
}

export const DataItem: FC<IProps> = ({label, value, isDivider, ...props}) => {
    return (
        <Box {...props}>
            <Stack
                direction="row"
                justifyContent="space-between"
                px={2}
                py={1.5}
            >
                <Typography>
                    <strong>{label}</strong>
                </Typography>
                <Typography>{value}</Typography>
            </Stack>
            {isDivider && (
                <Divider
                    sx={{
                        height: '2px',
                        backgroundColor: 'primary.main',
                    }}
                />
            )}
        </Box>
    );
};
