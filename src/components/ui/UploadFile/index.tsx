import React, {useEffect, useRef, useState} from 'react';
import {Box} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {imgStyle, useStyles} from './styles';
import LoadPage from '../../../pages/LoadPage';
import {isHeicSupported, convertHeicToPng} from '../../../utils/share';

interface IProps {
    onEdit?: (file: File) => void;
    sx?: object;
    accept?: string; // Пример: "image/*,application/pdf"
    value?: null | File;
}

export const UploadFile: React.FC<IProps> = ({
    onEdit,
    sx,
    accept = 'image/*,.heic',
    value = null,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (value instanceof File) {
            setSelectedFile(value);
            generatePreview(value);
        }
    }, [value]);

    const generatePreview = async (file: File) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(reader.result as string);
            reader.readAsDataURL(file);
        } else {
            setPreview(null); // не изображение
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true);

        const file = e.target.files?.[0];
        if (!file) return;

        let timeFile = file;

        if (
            (file.type === 'image/heic' ||
                file.name.toLowerCase().endsWith('.heic')) &&
            !isHeicSupported()
        ) {
            timeFile = await convertHeicToPng(file);
        }

        setSelectedFile(timeFile);
        generatePreview(timeFile);
        onEdit(timeFile);

        setIsLoading(false);
    };
    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    const styles = useStyles(sx);

    return (
        <Box sx={styles.rootContainer}>
            <Box onClick={handleBoxClick} sx={styles.container}>
                {isLoading ? (
                    <LoadPage />
                ) : selectedFile ? (
                    preview ? (
                        <img src={preview} alt="Preview" style={imgStyle} />
                    ) : (
                        <InsertDriveFileIcon sx={styles.imgIcon} />
                    )
                ) : (
                    <AddPhotoAlternateIcon sx={styles.imgIcon} />
                )}
            </Box>

            <input
                type="file"
                ref={fileInputRef}
                hidden
                accept={accept}
                onChange={handleFileChange}
            />
        </Box>
    );
};
