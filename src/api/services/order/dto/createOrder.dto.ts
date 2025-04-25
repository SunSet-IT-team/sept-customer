import {IServerAns} from '../../../../types/share';
import {OrderResponse} from '../../share/types';

export interface ICreateOrderDTO {
    objectType: string;
    comment?: string;
    septicConstructionType: string;
    paymentMethod: string;
    city: string;
    workDate: string;
    address?: string;
    distanceToSeptic: string;
    septicDepth: string;
    septicVolume: string;
    addressId?: number;
    serviceId: string;
    executorId: string;
    price?: number;
}

export interface ICreateOrderResponse extends IServerAns {
    data: OrderResponse;
}
