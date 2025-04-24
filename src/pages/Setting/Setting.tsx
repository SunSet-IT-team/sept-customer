import React from 'react';
import {Helmet} from 'react-helmet-async';
import {BackLayout} from '../layouts/BackLayout';
import {SettingForm} from '../../components/SettingForm';
import { useStyles } from './styles';

export const SettingsPage: React.FC = () => {
    const styles = useStyles()

    return (
        <>
            <Helmet>
                <title>Настройки</title>
            </Helmet>
            <BackLayout title="Настройки" sxTitle={styles.pageTitle}>
                <SettingForm />
            </BackLayout>
        </>
    );
};
