import {useEffect, useState} from 'react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    Button,
    Box,
    styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Стилизованный компонент для модального окна
const BottomDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialog-container': {
        alignItems: 'flex-end',
    },
    '& .MuiPaper-root': {
        margin: 0,
        width: '100%',
        borderRadius: '20px 20px 0 0',
    },
}));

export default function InstallPWAModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null);

    useEffect(() => {
        const isStandalone = window.matchMedia(
            '(display-mode: standalone)'
        ).matches;
        const isAlreadyInstalled =
            localStorage.getItem('pwa-installed') === 'true';

        if (!isStandalone && !isAlreadyInstalled) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        const isStandalone = window.matchMedia(
            '(display-mode: standalone)'
        ).matches;
        if (isStandalone) {
            setIsOpen(false);
            return;
        }

        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
        setIsIOS(isIOSDevice);

        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);
        };

        window.addEventListener(
            'beforeinstallprompt',
            handleBeforeInstallPrompt
        );

        return () => {
            window.removeEventListener(
                'beforeinstallprompt',
                handleBeforeInstallPrompt
            );
        };
    }, [setIsOpen]);

    const handleInstall = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const {outcome} = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                localStorage.setItem('pwa-installed', 'true');
                setDeferredPrompt(null);
                setIsOpen(false);
            }
        }
    };

    return (
        <BottomDialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    m: 0,
                },
            }}
        >
            <DialogTitle
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pb: 2,
                }}
            >
                <Box display="flex" alignItems="center" gap={2}>
                    <img src="/logo.png" alt="App Logo" style={{height: 32}} />
                </Box>
                <IconButton
                    onClick={() => setIsOpen(false)}
                    sx={{
                        p: 1,
                        '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.04)'},
                    }}
                >
                    <CloseIcon fontSize="medium" />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{pt: 0}}>
                <Box sx={{mb: 3}}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Установите наше приложение
                    </Typography>

                    <Typography
                        variant="body1"
                        color="text.secondary"
                        paragraph
                    >
                        Получите быстрый доступ к нашему сайту прямо с главного
                        экрана вашего устройства!
                    </Typography>

                    {isIOS ? (
                        <Typography variant="body1" color="text.secondary">
                            Нажмите{' '}
                            <Typography component="span" fontWeight="bold">
                                «Поделиться»
                            </Typography>{' '}
                            внизу экрана и выберите{' '}
                            <Typography component="span" fontWeight="bold">
                                «Добавить на экран Домой»
                            </Typography>
                            .
                        </Typography>
                    ) : (
                        <Typography variant="body1" color="text.secondary">
                            Нажмите кнопку{' '}
                            <Typography component="span" fontWeight="bold">
                                «Установить»
                            </Typography>{' '}
                            ниже, чтобы добавить приложение на ваш устройство.
                        </Typography>
                    )}
                </Box>

                {!isIOS && deferredPrompt && (
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={handleInstall}
                        sx={{
                            py: 2,
                            mb: 2,
                            borderRadius: '28px',
                            fontSize: '1rem',
                            fontWeight: 'medium',
                            textTransform: 'none',
                            backgroundColor: '#004B89',
                            '&:hover': {
                                backgroundColor: '#003366',
                            },
                        }}
                    >
                        Установить
                    </Button>
                )}
            </DialogContent>
        </BottomDialog>
    );
}

// Тип для beforeinstallprompt события
interface BeforeInstallPromptEvent extends Event {
    readonly platforms: string[];
    readonly userChoice: Promise<{
        outcome: 'accepted' | 'dismissed';
        platform: string;
    }>;
    prompt(): Promise<void>;
}

declare global {
    interface WindowEventMap {
        beforeinstallprompt: BeforeInstallPromptEvent;
    }
}
