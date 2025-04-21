import {Stack} from '@mui/material';
import {useStyles} from './styles';
import {settingFormData} from '../data';
import SettingFormFactoryInput from '../SettingFormFactoryInput';

type SettingFormContentProps = {
    editName: string;
    onClickEdit: (name: string) => void;
};

/**
 * Контент полей для страницы настроек
 */
const SettingFormContent = ({
    editName,
    onClickEdit,
}: SettingFormContentProps) => {
    const styles = useStyles();

    return (
        <Stack sx={styles.container}>
            {settingFormData.map((el) => (
                <Stack key={el.label} sx={styles.input}>
                    <SettingFormFactoryInput
                        {...el}
                        key={el.name}
                        editName={editName}
                        onClickEdit={onClickEdit}
                    />
                </Stack>
            ))}
        </Stack>
    );
};

export default SettingFormContent;
