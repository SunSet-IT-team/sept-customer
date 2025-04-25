import {IService} from '../../../../types/service';
import {getImagePath} from '../../../../utils/share';
import {ServiceResponse} from '../../share/types';

/*
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит услугу
 */
export const mappingServerService = (service: ServiceResponse): IService => {
    return {
        id: service.id,
        name: service.name,
        priority: service.priority,
        previewUrl: service.previewFile
            ? getImagePath(service.previewFile.url)
            : '',
    };
};
