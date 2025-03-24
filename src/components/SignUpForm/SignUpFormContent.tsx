import {Visibility, VisibilityOff} from '@mui/icons-material';
import {
    FormControlLabel,
    IconButton,
    InputAdornment,
    Stack,
    Typography,
} from '@mui/material';
import {FC, useState} from 'react';
import {
    CheckboxElement,
    TextFieldElement,
    useFormState,
} from 'react-hook-form-mui';
import {signUpInputsData} from './data';
import {IRegisterForm} from './form.type';
export const SignUpFormContent: FC = () => {
    const {errors} = useFormState<IRegisterForm>();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Stack alignItems={'center'} mt={3} spacing={'10px'} width={'100%'}>
            {signUpInputsData.map(({label, name, type, required}) => (
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
                        error={!!errors[name as keyof IRegisterForm]}
                        helperText={
                            errors[name as keyof IRegisterForm]?.message
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

            <>
                <FormControlLabel
                    control={
                        <CheckboxElement
                            name="processingDataAccepted"
                            color="secondary"
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    color:
                                        errors.processingDataAccepted
                                            ?.message && 'red',
                                },
                            }}
                        />
                    }
                    label="Согласие на обработку персональных данных"
                    sx={{
                        '& .MuiFormControlLabel-label': {
                            fontSize: '14px',
                        },
                        '& .MuiFormHelperText-root': {
                            borderColor: 'red',
                            position: 'absolute',
                            width: 'max-content',
                            top: '50px',
                            left: 0,
                            right: 0,
                            display: 'block',
                        },
                    }}
                />
            </>
        </Stack>
    );
};
