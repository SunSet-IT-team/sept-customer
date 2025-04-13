import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {IService} from '../../types/service';
import {ServiceItem} from './ServiceItem/ServiceItem';
import {noFindStyles} from './styles';

interface IProps {
    servicesList: IService[];
}
export const ServicesList: FC<IProps> = ({servicesList}) => {
    return (
        <>
            {servicesList.length > 0 ? (
                <Box
                    display={'grid'}
                    gap={'20px'}
                    gridTemplateColumns={'1fr 1fr'}
                >
                    {servicesList.map((service) => (
                        <ServiceItem {...service} key={service.id} />
                    ))}
                </Box>
            ) : (
                <Typography variant="h6" component="h2" sx={noFindStyles}>
                    Ничего не найдено
                </Typography>
            )}
        </>
    );
};
