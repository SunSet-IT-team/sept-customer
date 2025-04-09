export * as API_ROUTES from './routes';

import {AuthService} from './services/auth/auth.service';
import {ExecutorService} from './services/executor/executor.service';
import { OrderService } from './services/order/order.service';
import {ServicesService} from './services/services/services.service';
export const SERVICES = {
    AuthService,
    ServicesService,
    ExecutorService,
    OrderService,
};
