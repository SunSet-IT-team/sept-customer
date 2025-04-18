import {useQuery} from '@tanstack/react-query';
import {SERVICES} from '../../api';
import {mappingServerExecutors} from '../../api/services/executor/mapping/executor';

/**
 * Получение конкретного исполнителя
 */
export const useFetchExecutorById = (executorId: any) => {
    return useQuery({
        queryFn: () =>
            SERVICES.ExecutorService.getExecutorById(
                executorId ? Number(executorId) : 0
            ),
        queryKey: ['get executor by id', executorId],
        enabled: !!executorId,
        select: (data) => {
            if (!data.success) {
                throw new Error('Ошибка получения исполнителя');
            }

            return mappingServerExecutors(data.data);
        },
    });
};
