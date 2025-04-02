import {FC, useEffect} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useConfirmation} from '../../hooks/useConfirmation';
import {OtpField} from '../ui/Inputs/OtpField/OtpField';
import {IConfirmationForm} from './form.type';
export const ConfirmationForm: FC = () => {
    const {mutateAsync, isError} = useConfirmation();
    const {
        control,
        watch,
        setError,
        formState: {errors},
        clearErrors,
    } = useForm<IConfirmationForm>({
        defaultValues: {
            verification_code: '',
        },
    });

    const code = watch('verification_code');

    useEffect(() => {
        if (code.length === 5) {
            mutateAsync(+code);
        } else {
            clearErrors('verification_code');
        }
    }, [code]);

    useEffect(() => {
        if (isError) {
            setError('verification_code', {message: 'Неверный код'});
        }
    }, [isError]);

    return (
        <form>
            <Controller
                name="verification_code"
                control={control}
                rules={{validate: (value) => value.length === 6}}
                render={({field}) => (
                    <OtpField
                        field={field}
                        errorMessage={errors.verification_code?.message}
                    />
                )}
            />
        </form>
    );
};
