import {Box, Button} from '@mui/material';
import {FC, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {actionButtonSx} from './styles';

interface IProps {
    isConfirmed: boolean;
}

export const ActionButton: FC<IProps> = ({isConfirmed}) => {
    const navigate = useNavigate();

    const onClick = useCallback(
        function () {
            if (isConfirmed) return navigate('../chat', {relative: 'path'});
            else return navigate('../add-review', {relative: 'path'});
        },
        [isConfirmed]
    );

    return (
        <Box mt={'45px'}>
            <Button
                variant="contained"
                fullWidth
                sx={actionButtonSx}
                onClick={onClick}
            >
                {isConfirmed ? 'Открыть чат' : 'Оставить отзыв'}
            </Button>
        </Box>
    );
};
