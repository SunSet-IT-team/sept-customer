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
    distanceToSeptic: number;
    septicDepth: number;
    septicVolume: number;
    addressId?: number;
    serviceId: number;
    executorId: number;
    price?: number;
}

export interface ICreateOrderResponse extends IServerAns {
    data: OrderResponse;
}
