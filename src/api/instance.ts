import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
    // Понадобиться в дальнейшем для добавления refresh token в cookie
    // withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token && token != 'undefined') {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        /**
         * @TODO Логика связанная с тем, чтобы сделать isAuthentificated = false
         */
        if (error.response.status == 401) {
            // window.location.href = "/auth"
        }
        throw error;
    }
);

export default axiosInstance;
