import {IServerAns} from '../../../../types/share';
import {ReviewResponce} from '../../share/types';

export interface IGetReviewsDTO {
    page?: number;
    limit?: number;
    senderId?: number;
    targetId?: number;
}

export interface IGetReviewsResponse extends IServerAns {
    data: {
        items: ReviewResponce[];
        limit: number;
        page: number;
        total: number;
        pages: number;
    };
}
