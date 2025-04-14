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

    console.log(formData);
    console.log(service);
    console.log(executor);

    const onSubmit = async () => {
        try {
            const res = await SERVICES.OrderService.createOrder({
                objectType: formData.object_type,
                comment: formData.comment,
                septicConstructionType: formData.object,
                paymentMethod: formData.payment_type,
                workDate: formData.date,
                address: 'Адрес',
                distanceToSeptic: parseFloat(formData.entrance_distance),
                septicDepth: parseFloat(formData.septic_height),
                septicVolume: parseFloat(formData.volume),
                serviceId: parseInt(service.id),
            });

            console.log(res);

            // navigate(`/order/order_created/${10}`); //Здесь захардкожено значение, пока нет интеграции с сервером
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
                color="secondary"
                sx={{width: '100%', py: '12px', mt: '43px'}}
                type="submit"
            >
                Оформить вызов
            </Button>
        </FormContainer>
    );
};
