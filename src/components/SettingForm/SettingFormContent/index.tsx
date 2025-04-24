import {Box, Stack, Typography} from '@mui/material';
import {useStyles} from './styles';
import {settingFormData} from '../data';
import SettingFormFactoryInput from '../SettingFormFactoryInput';
import { requiredAsteriskStyles } from '../../ui/Inputs/InputField/styles';

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
            {settingFormData.map(({label, ...el}) => {

                return (
                    <Box sx={styles.input} key={label}>
                        <Typography variant="subtitle1" sx={styles.labelStyles}>
                            {label}
                            {el.required && (
                                <span style={requiredAsteriskStyles}>*</span>
                            )}
                        </Typography>
                        <Stack>
                            <SettingFormFactoryInput
                                {...el}
                                key={el.name}
                                editName={editName}
                                onClickEdit={onClickEdit}
                            />
                        </Stack>
                    </Box>
                );
            })}
        </Stack>
    );
};

export default SettingFormContent;
