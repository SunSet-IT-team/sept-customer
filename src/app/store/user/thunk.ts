import {createAsyncThunk} from '@reduxjs/toolkit';
import {Customer} from '../../../types/user';
import {SERVICES} from '../../../api';
import {mappingServerCustomer} from '../../../api/services/auth/mapping/customer';

/**
 * Запрашиваем данные об админе
 */
export const fetchUserData = createAsyncThunk<Customer | null, undefined>(
    'user/fetchUserData',
    async (_, {rejectWithValue}) => {
        try {
            const token = localStorage.getItem('token');

            if (!token) return null;

            const res = await SERVICES.AuthService.getUserInfo();

            // Значит ошибка
            if (res.error) return null;

            return mappingServerCustomer(res.data);
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || 'Ошибка загрузки пользователя'
            );
        }
    }
);
