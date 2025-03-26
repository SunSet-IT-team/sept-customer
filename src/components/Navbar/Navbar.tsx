import {BottomNavigation, BottomNavigationAction} from '@mui/material';
import {CSSProperties, FC, useLayoutEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {getActiveMenuItemStyles} from '../../utils/getActiveMenuItemStyles';
import {menuItems} from './data';

export const Navbar: FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<number>(0);
    const navigate = useNavigate();
    const location = useLocation();
    useLayoutEffect(() => {
        const index = menuItems.findIndex(
            (item) => item.href === location.pathname
        );
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
                const styles = getActiveMenuItemStyles(isActive, isHome);

                return (
                    <BottomNavigationAction
                        key={item.href}
                        label={item.title}
                        icon={
                            <div
                                style={{
                                    display: 'inline',
                                    ...(styles.wrapper as CSSProperties),
                                }}
                            >
                                <img
                                    src={
                                        isActive
                                            ? item.icon.activeUrl
                                            : item.icon.url
                                    }
                                    alt={item.title}
                                    width={isActive ? 52 : item.icon.size}
                                    height={isActive ? 52 : item.icon.size}
                                    style={styles.img}
                                />
                            </div>
                        }
                    />
                );
            })}
        </BottomNavigation>
    );
};
