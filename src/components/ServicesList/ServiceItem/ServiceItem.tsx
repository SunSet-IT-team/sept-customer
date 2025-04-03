import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import {IService} from '../../../types/service';
import {serviceItemStyle} from './styles';

export const ServiceItem: FC<IService> = ({id, title}) => {
    return (
        <Box
            component={Link}
            to={`service/${id}/new_order`}
            sx={serviceItemStyle}
        >
            <Typography variant="h6" fontSize={'18px'}>
                {title}
            </Typography>
        </Box>
    );
};
