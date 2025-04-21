import {SettingFormAboutInput} from './SettingFormAboutInput';
import {SettingFormInputField} from './SettingFormInputField';
import {SettingFormPasswordField} from './SettingFormPasswordField';

type SettingFormFactoryInput = {
    label: string;
    name: string;
    editName: string;
    required: boolean;
    type?: string;
    onClickEdit: (name: string) => void;
};

/**
 * Фабрика инпутов для страницы настроек
 */
const SettingFormFactoryInput = ({
    name,
    label,
    type,
    required,
    onClickEdit,
    editName,
}: SettingFormFactoryInput) => {
    switch (name) {
        case 'password':
            return (
                <SettingFormPasswordField
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );
        case 'newPassword':
            return (
                <SettingFormPasswordField
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );

        case 'about':
            return (
                <SettingFormAboutInput
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );

        default:
            return (
                <SettingFormInputField
                    label={label}
                    name={name}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );
    }
};

export default SettingFormFactoryInput;
