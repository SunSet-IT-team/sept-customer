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
export const ORDER_BY_ID = (orderId: number | string) => `order/${orderId}`;

export const ADD_REVIEW = (orderId: number | string) => `review/${orderId}`;
export const DELETE_REVIEW = (review: number | string) => `review/${review}`;
export const CHANGE_REVIEW = (review: number | string) => `review/${review}`;

export const CHAT_ORDER = (orderId: number | string) =>
    `/chat/order/${orderId}`;
export const CHAT_SUPPORT = () => `/chat/support`;
