import {API_ROUTES} from '../..';
import {IService} from '../../../types/service';
import axiosInstance from '../../instance';

export const ServicesService = {
    async getAllServices(): Promise<IService[]> {
        const response = await axiosInstance<IService[]>({
            url: API_ROUTES.GET_ALL_SERVICES(),
            method: 'GET',
        });

        return [];
        return response.data;
    },
};
