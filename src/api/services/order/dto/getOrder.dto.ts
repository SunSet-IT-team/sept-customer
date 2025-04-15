import {IServerAns} from '../../../../types/share';
import {OrderResponse} from '../../share/types';

export interface IGetOrderResponse extends IServerAns {
    data: OrderResponse;
}
