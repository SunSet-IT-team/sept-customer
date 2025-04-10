import React, {useState} from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import {AddressesBlock} from './components/AddressesBlock';
import {PhotoBlock} from './components/PhotoBlock';
import {SettingsBlock} from './components/SettingsBlock';
import {Helmet} from 'react-helmet-async';
import {PageTitle} from '../../components/PageTitle/PageTitle';

export const SettingsPage: React.FC = () => {
    const [saveDisabled, setSaveDisabled] = useState(true);

    const handleSave = () => {
        console.log('Настройки сохранены');
        setSaveDisabled(true);
    };

    return (
        <Container maxWidth="md" sx={{py: 4}}>
            <Helmet>
                <title>Настройки</title>
            </Helmet>
            <PageTitle title="Настройки" />

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
        </Container>
    );
};
