import {Visibility, VisibilityOff} from '@mui/icons-material';
import {IconButton, InputAdornment, Stack, Typography} from '@mui/material';
import {FC, useState} from 'react';
import {TextFieldElement, useFormState} from 'react-hook-form-mui';
import {forgotPasswordInputsData} from './data';
import {IForgotPasswordForm} from './form.type';
export const ForgotPasswordFormContent: FC = () => {
    const {errors} = useFormState<IForgotPasswordForm>();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Stack alignItems={'center'} mt={3} spacing={'10px'} width={'100%'}>
            {forgotPasswordInputsData.map(({label, name, type, required}) => (
                <Stack key={label} width={'100%'}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            mb: 1,
                            fontWeight: 500,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        textAlign={'center'}
                    >
                        {label}
                        {required && (
                            <span
                                style={{
                                    color: 'red',
                                    marginLeft: '2px',
                                    marginTop: '-10px',
                                }}
                            >
                                *
                            </span>
                        )}
                    </Typography>
                    <TextFieldElement
                        name={name}
                        variant="outlined"
                        fullWidth
                        type={
                            name === 'password'
                                ? showPassword
                                    ? 'text'
                                    : 'password'
                                : type || 'text'
                        }
                        error={!!errors[name as keyof IForgotPasswordForm]}
                        helperText={
                            errors[name as keyof IForgotPasswordForm]?.message
                        }
                        required={required}
                        sx={{
                            '& .MuiInputBase-input': {
                                padding: '10px',
                            },
                        }}
                        slotProps={{
                            input: {
                                endAdornment:
                                    name === 'password' ? (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() =>
                                                    setShowPassword(
                                                        (prev) => !prev
                                                    )
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ) : null,
                            },
                        }}
                    />
                </Stack>
            ))}
        </Stack>
    );
};
