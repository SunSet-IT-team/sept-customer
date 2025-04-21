import {useState, useEffect} from 'react';
import {UseFormReturn} from 'react-hook-form';
import {SettingFormData} from './schema';
import {Customer} from '../../types/user';
import {urlToFile} from '../../utils/share';

/**
 * Устаналвивает начальное значение для формы настроек
 */
const useSettingFormInitData = (
    formMethods: UseFormReturn<SettingFormData>,
    customer: Customer
) => {
    const [isInitializing, setIsInitializing] = useState(true);

    useEffect(() => {
        const initializeForm = async () => {
            try {
                setIsInitializing(true);

                formMethods.setValue('name', customer.name);
                formMethods.setValue('phone', customer.phone);
                formMethods.setValue('email', customer.email);

                // Загружаем и устанавливаем изображение
                const file = await urlToFile(customer.profile.profileImage);

                formMethods.setValue('profileImage', file);
            } catch (error) {
                console.error('Initialization error:', error);
            } finally {
                setIsInitializing(false);
            }
        };

        initializeForm();
    }, [formMethods, customer]);

    return {isInitializing};
};

export default useSettingFormInitData;
