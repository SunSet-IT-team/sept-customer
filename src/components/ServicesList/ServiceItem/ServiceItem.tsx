import {Box, Typography, Avatar, useTheme} from '@mui/material';
import {IService} from '../../../types/service';
import {serviceItemStyle} from './styles';
import ImageIcon from '@mui/icons-material/Image';

interface ServiceItemProps {
    service: IService;
    handleClick?: () => void;
}

export const ServiceItem = ({service, handleClick}: ServiceItemProps) => {
    const theme = useTheme();

    return (
        <Box
            onClick={handleClick || undefined}
            sx={{
                ...serviceItemStyle,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%', // Занимает всю доступную ширину
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%', // Занимает всю доступную ширину
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '16px',
                        mb: 1, // Отступ сверху
                        width: '100%',
                        letterSpacing: '-0.02em',
                        lineHeight: '21px',
                    }}
                >
                    {service.name}
                </Typography>
                {/* Контейнер для превью (80% ширины) */}
                <Box
                    sx={{
                        width: '65%',
                        position: 'relative',
                        '&:after': {
                            content: '""',
                            display: 'block',
                            paddingBottom: '100%', // Поддерживаем соотношение 1:1
                        },
                    }}
                >
                    {/* Круглое превью */}
                    <Avatar
                        src={service.previewUrl}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            bgcolor: theme.palette.grey[200],
                        }}
                    >
                        {!service.previewUrl && (
                            <ImageIcon
                                sx={{
                                    fontSize: '2.5rem',
                                    color: theme.palette.grey[500],
                                }}
                            />
                        )}
                    </Avatar>
                </Box>
            </Box>
        </Box>
    );
};
