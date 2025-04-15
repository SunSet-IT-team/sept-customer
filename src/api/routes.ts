export const REGISTER = () => '/auth/register/customer';
export const LOGIN = () => '/auth/login/customer';
export const VERIFY = () => '/auth/verify';
export const VERIFY_RESEND = () => '/auth/verify/resend';

export const CONFIRMATION_RESET_PASSWORD = () => 'confirmation';
export const RESET_PASSWORD = () => 'reset-password';

export const GET_ALL_SERVICES = () => '/service';
export const GET_ALL_EXECUTORS = () => '/executor';
export const GET_EXECUTOR_BY_ID = (executor_id: number) =>
    `executor/${executor_id}`;

export const GET_ME = () => '/customer/me';

export const ORDER = () => '/order';
export const ORDER_MY = () => '/order/my';
export const ORDER_BY_ID = (order_id: number | string) => `order/${order_id}`;
