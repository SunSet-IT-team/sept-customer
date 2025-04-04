import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
});
