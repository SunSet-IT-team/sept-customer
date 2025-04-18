import {BottomNavigation, BottomNavigationAction, Box} from '@mui/material';
import {FC, useLayoutEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {menuItems} from './data';
import {useStyles} from './styles';

/**
 * Панель навигации
 */
export const Navbar: FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<number>(0);
    const navigate = useNavigate();
    const location = useLocation();

    const styles = useStyles();

    useLayoutEffect(() => {
        const index = menuItems.findIndex(
            (item) => item.href === location.pathname
        );

        if (location.pathname == '/my-reviews') setActiveMenuItem(2);
        if (index !== -1) setActiveMenuItem(index);
    }, [location.pathname]);

    return (
        <BottomNavigation
            showLabels
            value={activeMenuItem}
            onChange={(_, newValue) => {
                setActiveMenuItem(newValue);
                navigate(menuItems[newValue].href);
            }}
        >
            {menuItems.map((item, index) => {
                const isActive = index === activeMenuItem;
                const isHome = index === 1;

                return (
                    <BottomNavigationAction
                        key={item.href}
                        label={item.title}
                        icon={
                            <Box sx={isActive && styles.wrapper}>
                                <Box
                                    component="img"
                                    src={
                                        isActive
                                            ? item.icon.activeUrl
                                            : item.icon.url
                                    }
                                    sx={
                                        isActive
                                            ? isHome
                                                ? styles.imgHome
                                                : styles.imgActive
                                            : styles.img
                                    }
                                    alt={item.title}
                                />
                            </Box>
                        }
                    />
                );
            })}
        </BottomNavigation>
    );
};
