import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import {IService} from '../../../types/service';

export const ServiceItem: FC<IService> = ({id, title}) => {
    return (
        <Box
            component={Link}
            to={`${id}`}
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            textAlign={'center'}
            borderRadius={'15px'}
            padding={'10px'}
            color={'black'}
            sx={{
                backgroundColor: 'primary.main',
                aspectRatio: '1/1',
                textDecoration: 'none',
            }}
        >
            <Typography variant="h6" fontSize={'18px'}>
                {title}
            </Typography>
        </Box>
    );
};
