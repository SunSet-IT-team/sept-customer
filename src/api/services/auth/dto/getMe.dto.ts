import {IServerAns} from '../../../../types/share';
import {CustomerResponse} from '../../share/types';

export interface IGetMeResponse extends IServerAns {
    data: CustomerResponse;
}
