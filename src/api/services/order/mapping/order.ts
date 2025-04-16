import {IOrder, OrderPaymentType} from '../../../../types/order';
import {mappingServerAddress} from '../../auth/mapping/address';
import {mappingServerExecutors} from '../../executor/mapping/executor';
import {mappingServerService} from '../../services/mapping/service';
import {OrderResponse} from '../../share/types';

/**
 * Фунция состыкования данных с севера под наши данные
 * Функция переводит заказ
 */
export const mappingServerOrder = (data: OrderResponse): IOrder => {
    return {
        address: data.address ? mappingServerAddress(data.address).address : '',
        executor: data.executor ? mappingServerExecutors(data.executor) : null,
        comment: data.comment || '',
        payment: data.paymentMethod as OrderPaymentType,
        id: `${data.id}`,
        date: new Date(data.workDate).toLocaleDateString('ru'),
        orderName: 'Название заказа',
        status: data.status || data.orderStaus,
        service: mappingServerService(data.service),
        review: null,
        volume: `${data.septicVolume}`,
        septicDepth: `${data.septicDepth}`,
        distanceToSeptic: `${data.distanceToSeptic}`,
        type: data.objectType,
    };
};
