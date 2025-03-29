import {INewOrderForm} from '../../components/OrderForm/schema';
import {IExecutorShort} from '../../types/executor';

export interface IInitialStateNewOrder {
    formData: INewOrderForm | null;
    executor: IExecutorShort | null;
}
