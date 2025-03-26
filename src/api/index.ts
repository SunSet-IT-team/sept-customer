export * as API_ROUTES from './routes';

import {AuthService} from './services/auth/auth.service';
import {ServicesService} from './services/services/services.service';
export const SERVICES = {
    AuthService,
    ServicesService,
};
