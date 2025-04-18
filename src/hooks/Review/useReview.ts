import {useMutation, useQueryClient} from '@tanstack/react-query';
import {IAddReviewDTO} from '../../api/services/order/dto/addReview.dto';
import {SERVICES} from '../../api';
import {toast} from 'react-toastify';
import {IChangeReviewDTO} from '../../api/services/order/dto/changeReview.dto';

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
        mutationFn: (reviewId: string | number) =>
            SERVICES.OrderService.deleteReview(reviewId),
        onSuccess: handleSuccess('Отзыв успешно удалён'),
    });

    // Изменение отзыва
    const changeReviewMutation = useMutation({
        mutationFn: ({
            reviewId,
            params,
        }: {
            reviewId: string | number;
            params: IChangeReviewDTO;
        }) => SERVICES.OrderService.changeReview(reviewId, params),
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
