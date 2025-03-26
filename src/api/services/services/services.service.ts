import {API_ROUTES} from '../..';
import {IService} from '../../../types/service';
import {axiosInstance} from '../../instance';

export const ServicesService = {
    async getAllServices(): Promise<IService[]> {
        const response = await axiosInstance<IService[]>({
            url: API_ROUTES.GET_ALL_SERVICES(),
            method: 'GET',
        });
        return new Promise((res) => {
            setTimeout(() => {
                res([
                    {
                        id: 1,
                        title: 'Очистка септиков',
                    },
                    {
                        id: 2,
                        title: 'Установка септиков',
                    },
                    {
                        id: 3,
                        title: 'Ремонт септиков',
                    },
                    {
                        id: 4,
                        title: 'Откачка септиков',
                    },
                    {
                        id: 5,
                        title: 'Обслуживание общественных туалетов',
                    },
                    {
                        id: 6,
                        title: 'Вывоз мусора',
                    },
                ]);
            }, 1500);
        });
        return response.data;
    },
};
