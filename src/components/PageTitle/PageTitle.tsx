import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import {Stack, Typography} from '@mui/material';
import {FC} from 'react';
import {useHandleBack} from '../../hooks/useHandleBack';

interface IProps {
    title: string;
}

export const PageTitle: FC<IProps> = ({title}) => {
    const {handleBack} = useHandleBack();

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
                onClick={handleBack}
            />
            <Typography variant="h6" sx={{fontWeight: 500}}>
                {title}
            </Typography>
        </Stack>
    );
};
