import {INewOrderForm} from '../../components/OrderForm/schema';
import {IExecutorShort} from '../../types/executor';
import {IService} from '../../types/service';

export interface IInitialStateNewOrder {
    formData: INewOrderForm | null;
    executor: IExecutorShort | null;
    service: IService | null;
}
