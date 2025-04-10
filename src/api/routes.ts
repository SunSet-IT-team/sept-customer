export const RESET_PASSWORD = () => 'reset-password';
export const CONFIRMATION_RESET_PASSWORD = () => 'confirmation';
export const GET_ALL_SERVICES = () => 'services';
export const GET_ALL_EXECUTORS = () => 'executors';
export const GET_EXECUTOR_BY_ID = (executor_id: number) =>
    `executors/${executor_id}`;

export const GET_CURRENT_USER_INFO = () => 'cutomer';
