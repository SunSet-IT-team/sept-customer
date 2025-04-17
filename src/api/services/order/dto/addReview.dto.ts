import {IServerAns} from '../../../../types/share';
import {OrderResponse} from '../../share/types';

export interface IAddReviewDTO {
    rating: number;
    text: string;
}

export interface IAddReviewResponse extends IServerAns {
    data: OrderResponse;
}
