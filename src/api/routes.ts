export const REGISTER = () => '/auth/register/customer';
export const LOGIN = () => '/auth/login/customer';
export const VERIFY = () => '/auth/verify';
export const VERIFY_RESEND = () => '/auth/verify/resend';

export const SEND_RESET_CODE = () => '/auth/password/forgot';
export const RESET_PASSWORD = () => '/auth/password/reset';

export const GET_ALL_SERVICES = () => '/service';
export const GET_ALL_EXECUTORS = () => '/executor';
export const GET_EXECUTOR_BY_ID = (executorId: number) =>
    `/executor/${executorId}`;

export const TOGGLE_FAVORITE = (executorId: number) =>
    `/favorite/${executorId}`;
export const FAVORITE = () => `/favorite`;

export const GET_ME = () => '/customer/me';
export const CHANGE_ME = () => '/customer/me';

export const ORDER = () => '/order';
export const ORDER_MY = () => '/order/my';
export const ORDER_BY_ID = (orderId: number | string) => `/order/${orderId}`;

export const REVIEWS = () => `/review`;
export const ADD_REVIEW = (orderId: number | string) => `/review/${orderId}`;
export const DELETE_REVIEW = (review: number | string) => `/review/${review}`;
export const CHANGE_REVIEW = (review: number | string) => `/review/${review}`;

export const CHAT_ORDER = (orderId: number | string) =>
    `/chat/order/${orderId}`;
export const CHAT_SUPPORT = () => `/chat/support`;
