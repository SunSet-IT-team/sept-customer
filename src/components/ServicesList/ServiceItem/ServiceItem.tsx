import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {IService} from '../../../types/service';
import {serviceItemStyle} from './styles';

interface ServiceItemProps {
    service: IService;
    handleClick?: () => void;
}

/**
 * Отображение карточки услуги
 */
export const ServiceItem = ({service, handleClick}: ServiceItemProps) => {
    return (
        <Box onClick={handleClick || undefined} sx={serviceItemStyle}>
            <Typography variant="h6" fontSize={'18px'}>
                {service.name}
            </Typography>
        </Box>
    );
};
