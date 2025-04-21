import {Button, Stack} from '@mui/material';
import {zodResolver} from '@hookform/resolvers/zod';
import {useStyles} from './styles';
import {FormContainer, useForm} from 'react-hook-form-mui';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {settingFormDefaultValues} from './data';
import {SettingFormData, settingFormSchema} from './schema';
import SettingFormContent from './SettingFormContent';
import useSettingFormInitData from './useSettingFormInitData';
import LoadPage from '../../pages/LoadPage';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getCurrentUser} from '../../app/store/user/selectors';
import {useAppDispatch} from '../../app/store/store';
import {IChangeMeDTO} from '../../api/services/auth/dto/changeMe.dto';
import {urlToFile} from '../../utils/share';
import {SERVICES} from '../../api';
import {setUser} from '../../app/store/user/slice';
import {mappingServerCustomer} from '../../api/services/auth/mapping/customer';
import {UploadFileWithLabel} from '../ui/UploadFile/UploadFileWithLabel/UploadFileWithLabel';
import {AddressListElement} from './SettingFormAddresses';

/**
 * Форма Настроек
 */
export const SettingForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [editName, setEditName] = useState<string | null>(null); // Текущее редактируемое поле
    const user = useTypedSelector(getCurrentUser);

    const formContext = useForm<SettingFormData>({
        defaultValues: settingFormDefaultValues,
        resolver: zodResolver(settingFormSchema),
    });

    const {isInitializing} = useSettingFormInitData(formContext, user);

    const styles = useStyles();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmit = async (formData: Required<SettingFormData>) => {
        const originalIds = formData.addresses
            .filter((a) => a.id)
            .map((a) => a.id as number);

        const updateAddresses = formData.addresses
            .filter((a) => a.id && a.value)
            .map((el) => ({
                value: el.value,
                id: el.id,
            }));
        const newAddresses = formData.addresses
            .filter((a) => !a.id)
            .filter((el) => el.value)
            .map((el) => ({
                value: el.value,
            }));

        const deleteAddressIds: number[] = [];

        // Пробегаемся по нашим адресам и ищем какиех нет
        user.profile.addresses.map((a) => {
            // Если нет, значит удалили
            if (!originalIds.includes(Number(a.id)))
                deleteAddressIds.push(Number(a.id));
        });

        // Делаем заготовку под
        const changeMeData: IChangeMeDTO = {};

        if (formData.name !== user.name) {
            changeMeData.firstName = formData.name;
        }

        if (formData.phone !== user.phone) {
            changeMeData.phone = formData.phone;
        }

        if (formData.email !== user.email) {
            changeMeData.email = formData.email;
        }

        if (updateAddresses.length) {
            changeMeData.updateAddresses = updateAddresses;
        }

        if (newAddresses.length) {
            changeMeData.newAddresses = newAddresses;
        }

        if (deleteAddressIds.length) {
            changeMeData.deleteAddressIds = deleteAddressIds;
        }

        // Проверка на изменение аватара
        // Преобразуем оригинальный URL в файл для сравнения
        const originalFile = await urlToFile(user.profile.profileImage);

        const isSameFile =
            formData.profileImage.name === originalFile.name &&
            formData.profileImage.size === originalFile.size &&
            formData.profileImage.type === originalFile.type;

        if (!isSameFile) {
            changeMeData.profilePhoto = formData.profileImage;
        }

        try {
            setIsLoading(true);
            const data = await SERVICES.AuthService.changeMe(changeMeData);

            if (!data.success) {
                const m = data.error || 'Ошибка изменения данных';
                toast.error(m);
                return;
            }

            dispatch(setUser(mappingServerCustomer(data.data)));
            toast.success('Данные успешно обновлены');
            navigate(`/`);
        } catch (error) {
            const message =
                error?.response?.data?.message || 'Ошибка Регистрации';

            toast.error(message);
        } finally {
            setIsLoading(false);
        }
    };

    if (isInitializing) return <LoadPage />;

    return (
        <FormContainer
            onSuccess={onSubmit}
            formContext={formContext}
            mode="onChange"
        >
            <Stack gap={2} sx={styles.mainList}>
                <SettingFormContent
                    editName={editName}
                    onClickEdit={(name: string) => setEditName(name)}
                />

                <AddressListElement
                    editName={editName}
                    onClickEdit={(name: string) => setEditName(name)}
                />

                <UploadFileWithLabel
                    name="profileImage"
                    label="Фото профиля"
                    error={formContext.formState.errors?.profileImage?.message}
                />

                <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={isLoading}
                    fullWidth
                >
                    Сохранить изменения
                </Button>
            </Stack>
        </FormContainer>
    );
};
