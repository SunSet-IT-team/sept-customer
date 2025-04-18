import {API_ROUTES} from '../..';
import {IExecutor} from '../../../types/executor';
import axiosInstance from '../../instance';
import {
    IGetAllExecutorsDTO,
    IGetAllExecutorsResponse,
    IGetExecutor,
} from './dto/getAll.dto';

/**
 * API по работе с исполнителями
 */
export const ExecutorService = {
    /**
     * Получить всех исполнителей
     */
    async getAllExecutors(data: IGetAllExecutorsDTO) {
        const page = data.page || 1;
        const limit = data.limit || 10;

        const url = `${API_ROUTES.GET_ALL_EXECUTORS()}?page=${page}&limit=${limit}`;

        const response = await axiosInstance<IGetAllExecutorsResponse>({
            url: url,
            method: 'GET',
        });

        return response.data;
    },

    async getExecutorById(executorId: number) {
        const response = await axiosInstance<IGetExecutor>({
            url: API_ROUTES.GET_EXECUTOR_BY_ID(executorId),
            method: 'GET',
        });

        return response.data;
    },
};
