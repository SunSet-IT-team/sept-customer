import {useMutation, useQueryClient} from '@tanstack/react-query';
import {IAddReviewDTO} from '../../api/services/order/dto/addReview.dto';
import {SERVICES} from '../../api';
import {toast} from 'react-toastify';

export const useReviewMutations = (orderId: string | number) => {
    const queryClient = useQueryClient();

    // Общая функция для обработки успешных мутаций
    const handleSuccess = (message: string) => () => {
        queryClient.invalidateQueries({
            queryKey: ['order', orderId],
        });
        toast.success(message);
    };

    // Добавление отзыва
    const addReviewMutation = useMutation({
        mutationFn: (params: IAddReviewDTO) =>
            SERVICES.OrderService.addReview(orderId, params),
        onSuccess: handleSuccess('Отзыв успешно добавлен'),
    });

    // Удаление отзыва
    const deleteReviewMutation = useMutation({
        mutationFn: () => SERVICES.OrderService.deleteReview(orderId),
        onSuccess: handleSuccess('Отзыв успешно удалён'),
    });

    // Изменение отзыва
    const changeReviewMutation = useMutation({
        mutationFn: () => SERVICES.OrderService.changeReview(orderId),
        onSuccess: handleSuccess('Отзыв успешно изменён'),
    });

    return {
        addReview: addReviewMutation.mutate,
        deleteReview: deleteReviewMutation.mutate,
        changeReview: changeReviewMutation.mutate,
        isPending: {
            add: addReviewMutation.isPending,
            delete: deleteReviewMutation.isPending,
            change: changeReviewMutation.isPending,
        },
    };
};
