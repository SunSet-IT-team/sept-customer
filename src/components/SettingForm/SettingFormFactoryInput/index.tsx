import {SettingFormAboutInput} from './SettingFormAboutInput';
import {SettingFormInputField} from './SettingFormInputField';
import {SettingFormPasswordField} from './SettingFormPasswordField';

type SettingFormFactoryInput = {
    name: string;
    label: string;
    labelPosition?: 'start' | 'center' | 'end';
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
    labelPosition = 'start',
    type,
    required,
    onClickEdit,
    editName,
}: SettingFormFactoryInput) => {
    switch (name) {
        case 'password':
            return (
                <SettingFormPasswordField
                    name={name}
                    label={label}
                    labelPosition={labelPosition}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );
        case 'newPassword':
            return (
                <SettingFormPasswordField
                    name={name}
                    label={label}
                    labelPosition={labelPosition}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );

        case 'about':
            return (
                <SettingFormAboutInput
                    name={name}
                    label={label}
                    labelPosition={labelPosition}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );

        default:
            return (
                <SettingFormInputField
                    name={name}
                    label={label}
                    labelPosition={labelPosition}
                    type={type}
                    required={required}
                    onClickEdit={onClickEdit}
                    editName={editName}
                />
            );
    }
};

export default SettingFormFactoryInput;
