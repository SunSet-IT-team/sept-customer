import React from 'react';
import {Box, Avatar, Typography, Button, Container} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

import {useProfileStyles} from './styles';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getCurrentUser} from '../../app/store/user/selectors';
import {LayoutWithNavbar} from '../layouts/LayoutWithNavbar/LayoutWithNavbar';
import {CalendarIcon} from '../../components/ui/icons/CalendarIcon';
import {DocumentAddIcon} from '../../components/ui/icons/DocumentAddIcon';
import {ProfileLikeIcon} from '../../components/ui/icons/ProfileLikeIcon';
import {StarIcon} from '../../components/ui/icons/StarIcon';

/**
 * Страница профиля
 */
const ProfilePage: React.FC = () => {
    const styles = useProfileStyles();

    const user = useTypedSelector(getCurrentUser);

    const menuItems = [
        {
            icon: <StarIcon />,
            text: 'Мои отзывы',
            path: '/my-reviews',
        },
        {
            icon: <CalendarIcon />,
            text: 'Мои вызовы',
            path: '/my-orders',
        },
        {
            icon: <ProfileLikeIcon />,
            text: 'Избранное',
            path: '/favorites',
        },
        {
            icon: <DocumentAddIcon />,
            text: 'Настройки',
            path: '/settings',
        },
        {
            text: 'Техподдержка',
            path: '/support',
        },
    ];

    return (
        <Box sx={styles.root}>
            {/* Верхний блок с аватаром */}
            <Box sx={styles.header}>
                <Avatar
                    src={user.profile.profileImage}
                    sx={styles.avatar}
                ></Avatar>
                <Typography variant="h5" component="h1">
                    {user.name}
                </Typography>
            </Box>

            <LayoutWithNavbar>
                <Container maxWidth="sm" sx={styles.menuContainer}>
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            fullWidth
                            startIcon={item.icon}
                            sx={styles.menuButton}
                            component={RouterLink}
                            to={item.path}
                        >
                            <Typography variant="body1" sx={styles.menuText}>
                                {item.text}
                            </Typography>
                        </Button>
                    ))}
                </Container>
            </LayoutWithNavbar>
        </Box>
    );
};

export default ProfilePage;
