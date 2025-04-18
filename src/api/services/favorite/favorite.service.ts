import {API_ROUTES} from '../..';
import axiosInstance from '../../instance';
import {
    IGetAllFavoritesDTO,
    IGetAllFavoritesResponse,
    IGetFavoriteResponse,
} from './dto/getAll.dto';

/**
 * API по работе с избранным
 */
export const FavoriteService = {
    /**
     *  Добавить в / убрать из избранного
     */
    async toggleFavorite(executorId: number) {
        const response = await axiosInstance<IGetFavoriteResponse>({
            url: API_ROUTES.TOGGLE_FAVORITE(executorId),
            method: 'POST',
        });

        return response.data;
    },

    /**
     *  Получить всех из избранного
     */
    async getFavorites(params: IGetAllFavoritesDTO) {
        const page = params.page || 1;
        const limit = params.limit || 10;

        const url = `${API_ROUTES.FAVORITE()}?page=${page}&limit=${limit}`;

        const response = await axiosInstance<IGetAllFavoritesResponse>({
            url: url,
            method: 'GET',
        });

        return response.data;
    },
};
