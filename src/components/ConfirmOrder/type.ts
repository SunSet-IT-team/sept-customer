import {INewOrderForm} from '../OrderForm/schema';

export interface IOrder extends INewOrderForm {
    executor: string;
}
