import {Box} from '@mui/material';
import {FC} from 'react';
import {IService} from '../../types/service';
import {ServiceItem} from './ServiceItem/ServiceItem';

interface IProps {
    servicesList: IService[];
}
export const ServicesList: FC<IProps> = ({servicesList}) => {
    return (
        <Box display={'grid'} gap={'20px'} gridTemplateColumns={'1fr 1fr'}>
            {servicesList.map((service) => (
                <ServiceItem
                    id={service.id}
                    title={service.title}
                    key={service.title}
                />
            ))}
        </Box>
    );
};
