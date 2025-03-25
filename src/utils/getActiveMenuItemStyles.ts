export const getActiveMenuItemStyles = (isActive: boolean, isHome: boolean) => {
    if (!isActive) return {};

    return {
        wrapper: {
            position: 'absolute',
            top: '-50%',
            background: 'white',
            borderRadius: '50%',
            padding: '4px',
            width: '62px',
            height: '62px',
        },
        img: {
            borderRadius: '50%',
            padding: '4px',
            ...(isHome
                ? {border: '2px solid #4D4D4D'}
                : {background: '#4D4D4D'}),
        },
    };
};
