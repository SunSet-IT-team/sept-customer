import {createAsyncThunk} from '@reduxjs/toolkit';
import {Customer} from '../../types/user';
import {SERVICES} from '../../api';

/**
 * Запрашиваем данные об админе
 */
export const fetchUserData = createAsyncThunk<Customer | null, undefined>(
    'user/fetchUserData',
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) return null;

            const {data} = await SERVICES.AuthService.getUserInfo();

            // Значит ошибка
            if (data.error) return null;

            // const adminData: Customer = {
            //     id: data.id,
            //     email: data.email,
            //     login: 'admin',
            // };

            return null;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'Ошибка загрузки пользователя'
            );
        }
    }
);
