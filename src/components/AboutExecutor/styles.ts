import {SxProps, Theme} from '@mui/material';

export const executorImageContainerStyle: SxProps<Theme> = {
    position: 'relative',
};

export const executorImageStyle = {
    width: 143,
    height: 143,
    backgroundColor: '#7D7D7D',
    borderRadius: '20px',
};

export const favouriteIconStyle: SxProps<Theme> = {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export const ratingBoxStyle: SxProps<Theme> = {
    px: '4px',
    py: '8px',
    border: '1px solid black',
    borderRadius: '20px',
    mt: '-10px',
    backgroundColor: 'white',
    position: 'relative',
};

export const ratingStackStyle: SxProps<Theme> = {
    flexDirection: 'row',
    gap: '5px',
    justifyContent: 'center',
    alignItems: 'center',
};

export const ratingTextStyle: SxProps<Theme> = {
    display: 'flex',
    gap: '5px',
    justifyContent: 'center',
    alignItems: 'center',
};

export const companyNameStyle: SxProps<Theme> = {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: '500',
    py: '20px',
};

export const infoBoxStyle: SxProps<Theme> = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    px: '16px',
    py: '8px',
    border: '1px solid black',
    borderRadius: '20px',
    backgroundColor: 'primary.main',
};

export const infoBoxItemStyle: SxProps<Theme> = {
    width: '100%',
    textAlign: 'center',
};

export const descriptionBoxStyle: SxProps<Theme> = {
    mt: '37px',
};

export const reviewsBoxStyle: SxProps<Theme> = {
    mt: '20px',
};
