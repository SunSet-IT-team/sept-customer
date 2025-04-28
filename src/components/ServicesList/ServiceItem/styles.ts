import {SxProps, Theme} from '@mui/material';

export const serviceItemStyle: SxProps<Theme> = {
    width: '100%',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    fontSize: '16px',
    lineHeight: '21px',
    color: 'black',
    fontWeight: 500,
    alignItems: 'center',
    backgroundColor: 'background.blue',
    textDecoration: 'none',
    position: 'relative', // важно для корректного позиционирования псевдоэлемента
    '&::after': {
        content: '""',
        display: 'block',
        paddingBottom: '100%', // создаёт высоту = ширине
    },
    '& > *': {
        p: '10px',

        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};
