export const REGISTER = () => '/auth/register/customer';
export const LOGIN = () => '/auth/login/customer';
export const VERIFY = () => '/auth/verify';
export const VERIFY_RESEND = () => '/auth/verify/resend';

export const CONFIRMATION_RESET_PASSWORD = () => 'confirmation';
export const RESET_PASSWORD = () => 'reset-password';

export const GET_ALL_SERVICES = () => 'services';
export const GET_ALL_EXECUTORS = () => 'executors';
export const GET_EXECUTOR_BY_ID = (executor_id: number) =>
    `executors/${executor_id}`;

export const GET_ME = () => '/customer/me';
