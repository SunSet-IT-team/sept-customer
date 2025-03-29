import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useNavigate} from 'react-router-dom';

interface IProps {
    title: string;
}

export const PageTitle: FC<IProps> = ({title}) => {
    const navigate = useNavigate();
    const toBack = () => {
        navigate(-1);
    };
    return (
        <Stack
            direction={'row'}
            justifyContent={'center'}
            width={'100%'}
            alignItems={'center'}
        >
            <ArrowBackIosNewRoundedIcon
                sx={{
                    position: 'absolute',
                    left: '33px',
                    cursor: 'pointer',
                    padding: '2px',
                }}
                onClick={toBack}
            />
            <Typography variant="h6" sx={{fontWeight: 500}}>
                {title}
            </Typography>
        </Stack>
    );
};
