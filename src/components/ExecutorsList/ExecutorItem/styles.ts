import {SxProps, Theme} from '@mui/material';

export const imageContainerStyle: SxProps<Theme> = {
    width: '90px',
    height: '90px',
    borderRadius: '20px',
    position: 'relative',
};

export const imageStyle = {
    borderRadius: '20px',
    width: '90px',
    height: '90px',
    objectFit: 'cover',
};

export const toggleFavouriteStyle: SxProps<Theme> = {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    border: '1px solid black',
};

export const infoContainerStyle: SxProps<Theme> = {
    justifyContent: 'space-between',
    width: '100%',
};

export const ratingContainerStyle: SxProps<Theme> = {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '2px',
};

export const chooseButtonStyle: SxProps<Theme> = {
    backgroundColor: 'secondary.main',
    color: 'white',
    fontSize: '14px',
    textTransform: 'none',
    width: '50%',
};

export const aboutButtonStyle: SxProps<Theme> = {
    backgroundColor: 'primary.main',
    color: 'black',
    fontSize: '14px',
    textTransform: 'none',
    width: '50%',
};

export const executorItemContainerStyle: SxProps<Theme> = {
    direction: 'row',
    gap: '10px',
};

export const stackContainerStyle: SxProps<Theme> = {
    justifyContent: 'space-between',
    width: '100%',
};

export const buttonGroupStyle: SxProps<Theme> = {
    direction: 'row',
    justifyContent: 'space-between',
    gap: '10px',
};
