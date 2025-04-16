import {IServerAns} from '../../../../types/share';
import {ExecutorResponse} from '../../share/types';

export interface IGetAllExecutorsDTO {
    page?: number;
    limit?: number;
}

export interface IGetAllExecutorsResponse extends IServerAns {
    data: {
        items: ExecutorResponse[];
        limit: number;
        page: number;
        total: number;
        pages: number;
    };
}

export interface IGetExecutor extends IServerAns {
    data: ExecutorResponse;
}
