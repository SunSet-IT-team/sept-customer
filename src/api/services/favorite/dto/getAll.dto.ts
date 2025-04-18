import {IServerAns} from '../../../../types/share';
import {ExecutorResponse} from '../../share/types';

export interface IGetAllFavoritesDTO {
    page?: number;
    limit?: number;
}

export interface IGetAllFavoritesResponse extends IServerAns {
    data: {
        items: ExecutorResponse[];
        limit: number;
        page: number;
        total: number;
        pages: number;
    };
}

export interface IGetFavoriteResponse extends IServerAns {
    data: {
        message: string;
    };
}
