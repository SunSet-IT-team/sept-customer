import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {useNavigate} from 'react-router-dom';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {ConfirmOrderFormContent} from './ConfirmOrderContent';
import {IOrder} from './type';

export const ConfirmOrderForm: FC = () => {
    const navigate = useNavigate();
    const {formData, executor, service} = useTypedSelector(
        (state) => state.newOrderForm
    );

    const onSubmit = (data: IOrder) => {
        console.log({...formData, ...executor});
        navigate(`/order/order_created/${10}`); //Здесь захардкожено значение, пока нет интеграции с сервером
    };
    const defaultValues = {
        ...formData,
        executor: executor?.title,
        service: service?.title,
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
