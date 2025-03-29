import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {useNavigate} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {newOrderSlice} from '../../store/new_order/new_order.slice';
import {NewOrderFormContent} from './NewOrderFormContent';
import {INewOrderForm, newOrderFormSchema} from './schema';
export const NewOrderForm: FC = () => {
    const navigate = useNavigate();
    const {setFormData} = useActions(newOrderSlice.actions);
    const {formData} = useTypedSelector((state) => state.newOrderForm);
    const onSubmit = (data: INewOrderForm) => {
        console.log(data);
        setFormData(data);
        navigate('choose_executor');
    };
    const defaultValues = formData || {
        comment: '',
        date: '',
        entrance_distance: '',
        object: '',
        object_type: '',
        payment_type: '',
        septic_height: '',
        volume: '',
    };
    return (
        <FormContainer
            onSuccess={onSubmit}
            resolver={zodResolver(newOrderFormSchema)}
            defaultValues={defaultValues}
            mode="onChange"
        >
            <NewOrderFormContent />

            <Button
                variant="contained"
                color="secondary"
                sx={{width: '100%', py: '12px', mt: '43px'}}
                type="submit"
            >
                Далее
            </Button>
        </FormContainer>
    );
};
