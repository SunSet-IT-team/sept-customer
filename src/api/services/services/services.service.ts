import {API_ROUTES} from '../..';
import axiosInstance from '../../instance';
import {IGetServicesResponse} from './dto/services.dto';

export const ServicesService = {
    async getAllServices(): Promise<IGetServicesResponse> {
        const response = await axiosInstance<IGetServicesResponse>({
            url: API_ROUTES.GET_ALL_SERVICES(),
            method: 'GET',
        });

        return response.data;
    },
};
