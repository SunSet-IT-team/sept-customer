import {API_ROUTES} from '../..';
import {IExecutor} from '../../../types/executor';
import axiosInstance from '../../instance';
import {IGetAllExecutorsDTO, IGetAllExecutorsResponse} from './dto/getAll.dto';

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

    async getExecutorById(executor_id: number): Promise<IExecutor> {
        const response = await axiosInstance<IExecutor>({
            url: API_ROUTES.GET_EXECUTOR_BY_ID(executor_id),
            method: 'GET',
        });

        console.log(response);

        return response.data;
    },
};
