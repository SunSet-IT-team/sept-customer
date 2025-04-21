import {Stack, SxProps, Typography} from '@mui/material';
import {ComponentProps, FC} from 'react';
import {UploadFile} from '..';
import {Theme} from '@emotion/react';
import {labelStyles, useStyles} from './styles';
import {Controller, useFormContext} from 'react-hook-form-mui';

interface IProps extends ComponentProps<typeof UploadFile> {
    name: string;
    label: string;
    uploadFileSx?: SxProps<Theme>;
    error?: string;
    accept?: string;
}

/**
 * Отображение загрузки картинки вместе с текстом
 */
export const UploadFileWithLabel: FC<IProps> = ({
    label,
    sx,
    uploadFileSx,
    name,
    error,
    accept,
}) => {
    const {control} = useFormContext();
    const styles = useStyles(sx, uploadFileSx);

    return (
        <Stack direction="row" spacing={2} sx={styles.container}>
            <Controller
                name={name}
                control={control}
                render={({field}) => {
                    return (
                        <Stack
                            direction={'row'}
                            spacing={2}
                            sx={styles.container}
                        >
                            <UploadFile
                                sx={styles.uploadFile}
                                onEdit={(file) => field.onChange(file)}
                                value={field.value}
                                accept={accept}
                            />
                            <Typography sx={styles.labelContainer}>
                                <span style={labelStyles}>{label}</span>
                            </Typography>
                        </Stack>
                    );
                }}
            />
            {/* Отображение ошибки для конкретного файла */}
            {error && (
                <Typography color="error" sx={styles.errMsg}>
                    {error}
                </Typography>
            )}
        </Stack>
    );
};
