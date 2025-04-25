import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {ConfirmOrderFormContent} from './ConfirmOrderContent';
import {SERVICES} from '../../api';
import {toast} from 'react-toastify';

export const ConfirmOrderForm: FC = () => {
    const navigate = useNavigate();
    const {formData, executor, service} = useTypedSelector(
        (state) => state.newOrderForm
    );

    const onSubmit = async () => {
        try {
            const res = await SERVICES.OrderService.createOrder({
                address: formData.address,
                objectType: formData.object_type,
                comment: formData.comment,
                septicConstructionType: formData.object,
                paymentMethod: formData.payment_type,
                workDate: formData.date,
                distanceToSeptic: String(formData.entrance_distance),
                septicDepth: String(formData.septic_height),
                septicVolume: String(formData.volume),
                serviceId: String(service.id),
                executorId: String(executor.id),
                city: formData.city,
            });

            if (!res.success) {
                toast.error('Ошибка при создании заказа');
                return;
            }

            navigate(`/order/order_created/${res.data.id}`);
        } catch (error) {
            toast.error('Ошибка при создании заказа');
        }
    };
    const defaultValues = {
        ...formData,
        executor: executor?.title,
        service: service?.name,
    };
    return (
        <FormContainer
            onSuccess={onSubmit}
            defaultValues={defaultValues}
            mode="onChange"
        >
            <ConfirmOrderFormContent />

            <Button
                variant="contained"
                color="primary"
                sx={{width: '100%', py: '12px', mt: '43px'}}
                type="submit"
            >
                Оформить вызов
            </Button>
        </FormContainer>
    );
};
