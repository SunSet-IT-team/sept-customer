import React from 'react';
import {Helmet} from 'react-helmet-async';
import {BackLayout} from '../layouts/BackLayout';
import {SettingForm} from '../../components/SettingForm';

export const SettingsPage: React.FC = () => {

    return (
        <>
            <Helmet>
                <title>Настройки</title>
            </Helmet>
            <BackLayout title="Настройки">
                <SettingForm />
            </BackLayout>
        </>
    );
};
