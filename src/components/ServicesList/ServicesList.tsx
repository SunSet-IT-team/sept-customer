import {Box, Typography} from '@mui/material';
import {FC} from 'react';
import {IService} from '../../types/service';
import {ServiceItem} from './ServiceItem/ServiceItem';
import {noFindStyles} from './styles';
import {useNavigate} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {newOrderSlice} from '../../store/newOrder/newOrder.slice';

interface IProps {
    servicesList: IService[];
}
export const ServicesList: FC<IProps> = ({servicesList}) => {
    const {setService} = useActions(newOrderSlice.actions);
    const navigate = useNavigate();

    const handleChooseService = (s: IService) => {
        setService(s);

        navigate(`service/${s.id}/new_order`);
    };

    return (
        <>
            {servicesList.length > 0 ? (
                <Box
                    display={'grid'}
                    gap={'20px'}
                    gridTemplateColumns={'1fr 1fr'}
                >
                    {servicesList.map((service) => (
                        <ServiceItem
                            service={service}
                            key={service.id}
                            handleClick={() => handleChooseService(service)}
                        />
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
