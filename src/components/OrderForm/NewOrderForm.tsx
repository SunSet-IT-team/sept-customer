import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@mui/material';
import {FC} from 'react';
import {FormContainer} from 'react-hook-form-mui';
import {useNavigate} from 'react-router-dom';
import {useActions} from '../../hooks/useActions';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {newOrderSlice} from '../../app/store/newOrder/newOrder.slice';
import {newOrderDefaultValues} from './data';
import {NewOrderFormContent} from './NewOrderFormContent/NewOrderFormContent';
import {INewOrderForm, newOrderFormSchema} from './schema';
import {submitButtonStyles} from './styles';

export const NewOrderForm: FC = () => {
    const navigate = useNavigate();
    const {setFormData} = useActions(newOrderSlice.actions);
    const {formData} = useTypedSelector((state) => state.newOrderForm);

    const onSubmit = (data: INewOrderForm) => {
        setFormData(data);
        navigate('choose_executor');
    };

    const defaultValues = formData || newOrderDefaultValues;

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
                color="primary"
                sx={submitButtonStyles}
                type="submit"
            >
                Далее
            </Button>
        </FormContainer>
    );
};
