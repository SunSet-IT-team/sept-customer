import {IService} from '../../../../types/service';
import {ServiceResponse} from '../../share/types';

/*
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит услугу
 */
export const mappginServerService = (service: ServiceResponse): IService => {
    return {
        id: service.id,
        name: service.name,
        priority: service.priority,
    };
};
