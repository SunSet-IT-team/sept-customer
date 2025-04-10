import React, {useRef, useState} from 'react';
import {Box, Button, Typography} from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export const PhotoBlock: React.FC<{onEdit: () => void}> = ({onEdit}) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
                onEdit();
            };
            reader.readAsDataURL(file);
        }
    };

    const handleBoxClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <Box>
            <Typography variant="h6" sx={{mb: 3}}>
                Фото профиля
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center', mb: 2}}>
                <Box
                    onClick={handleBoxClick}
                    sx={{
                        width: 108,
                        minWidth: 108,
                        height: 108,
                        borderRadius: '10px',
                        bgcolor: 'grey.300',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mr: 3,
                        overflow: 'hidden',
                        cursor: 'pointer',
                        '&:hover': {
                            bgcolor: 'grey.400',
                        },
                    }}
                >
                    {preview ? (
                        <img
                            src={preview}
                            alt="Preview"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        <AddPhotoAlternateIcon
                            sx={{fontSize: 40, color: 'grey.600'}}
                        />
                    )}
                </Box>

                <input
                    type="file"
                    ref={fileInputRef}
                    hidden
                    accept="image/jpeg, image/png"
                    onChange={handleFileChange}
                />

                <Box>
                    <Typography variant="body1" gutterBottom>
                        Можно загрузить изображение в формате jpg, png
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
