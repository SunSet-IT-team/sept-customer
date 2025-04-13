import {IServerAns} from '../../../../types/share';
import {ServiceResponse} from '../../share/types';

export interface IGetServicesResponse extends IServerAns {
    data: {
        limit: number;
        page: number;
        total: number;
        pages: number;
        items: ServiceResponse[];
    };
}
