import React, {useState} from 'react';
import {Box, Button} from '@mui/material';
import {AddressesBlock} from './components/AddressesBlock';
import {PhotoBlock} from './components/PhotoBlock';
import {SettingsBlock} from './components/SettingsBlock';
import {Helmet} from 'react-helmet-async';
import {BackLayout} from '../layouts/BackLayout';

export const SettingsPage: React.FC = () => {
    const [saveDisabled, setSaveDisabled] = useState(true);

    const handleSave = () => {
        setSaveDisabled(true);
    };

    return (
        <>
            <Helmet>
                <title>Настройки</title>
            </Helmet>
            <BackLayout title="Настройки">
                <Box sx={{mb: 4, mt: 6}}>
                    <SettingsBlock onEdit={() => setSaveDisabled(false)} />
                </Box>

                <Box sx={{mb: 4}}>
                    <AddressesBlock onEdit={() => setSaveDisabled(false)} />
                </Box>

                <Box sx={{mb: 4}}>
                    <PhotoBlock onEdit={() => setSaveDisabled(false)} />
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    disabled={saveDisabled}
                    onClick={handleSave}
                    fullWidth
                >
                    Сохранить изменения
                </Button>
            </BackLayout>
        </>
    );
};
