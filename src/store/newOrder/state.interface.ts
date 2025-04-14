import {INewOrderForm} from '../../components/OrderForm/schema';
import {IExecutor} from '../../types/executor';
import {IService} from '../../types/service';

export interface IInitialStateNewOrder {
    formData: INewOrderForm | null;
    executor: IExecutor | null;
    service: IService | null;
}
