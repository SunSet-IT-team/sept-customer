import {IServerAns} from '../../../../types/share';
import {OrderResponse} from '../../share/types';

export interface IGetOrdersDTO {
    page?: number;
    limit?: number;
}

export interface IGetOrdersResponse extends IServerAns {
    data: {
        items: OrderResponse[];
        limit: number;
        page: number;
        total: number;
        pages: number;
    };
}
