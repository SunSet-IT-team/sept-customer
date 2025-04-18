import React from 'react';
import {Box, Avatar, Typography, Button, Container} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';

import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import {useProfileStyles} from './styles';
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {getCurrentUser} from '../../app/store/user/selectors';
import {LayoutWithNavbar} from '../layouts/LayoutWithNavbar/LayoutWithNavbar';

/**
 * Страница профиля
 */
const ProfilePage: React.FC = () => {
    const styles = useProfileStyles();

    const user = useTypedSelector(getCurrentUser);

    const menuItems = [
        {
            icon: <StarOutlineRoundedIcon />,
            text: 'Мои отзывы',
            path: '/my-reviews',
        },
        {
            icon: <CalendarTodayRoundedIcon />,
            text: 'Мои вызовы',
            path: '/my-orders',
        },
        {
            icon: <FavoriteBorderRoundedIcon />,
            text: 'Избранное',
            path: '/favorites',
        },
        {
            icon: <ManageAccountsRoundedIcon />,
            text: 'Настройки',
            path: '/settings',
        },
        {
            icon: <HelpOutlineRoundedIcon />,
            text: 'Техподдержка',
            path: '/support',
        },
    ];

    return (
        <Box sx={styles.root}>
            <LayoutWithNavbar>
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

                {/* Меню */}
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
