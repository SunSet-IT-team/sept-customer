import {
    TextFieldElement,
    useFormContext,
    useFieldArray,
} from 'react-hook-form-mui';
import {
    Box,
    IconButton,
    Stack,
    Typography,
    Button,
    InputAdornment,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

type AddressListElementProps = {
    editName: string;
    onClickEdit: (name: string) => void;
};

export const AddressListElement = ({
    editName,
    onClickEdit,
}: AddressListElementProps) => {
    const {control} = useFormContext();
    const {fields, append, remove} = useFieldArray({
        control,
        name: 'addresses',
    });

    return (
        <Box my={3} sx={{width: '100%'}}>
            <Typography variant="h6" textAlign="center" mb={2}>
                Мои адреса
            </Typography>

            <Stack spacing={2}>
                {fields.map((field, index) => (
                    <TextFieldElement
                        key={field.id}
                        name={`addresses.${index}.value`}
                        label={`Адрес ${index + 1}`}
                        variant="outlined"
                        fullWidth
                        required
                        slotProps={{
                            input: {
                                readOnly:
                                    editName !== `addresses.${index}.value`,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                onClickEdit(
                                                    `addresses.${index}.value` ==
                                                        editName
                                                        ? null
                                                        : `addresses.${index}.value`
                                                )
                                            }
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'primary.main',
                                            }}
                                        >
                                            {editName ===
                                            `addresses.${index}.value` ? (
                                                <CheckIcon />
                                            ) : (
                                                <EditIcon />
                                            )}
                                        </IconButton>
                                        <IconButton
                                            onClick={() => remove(index)}
                                            color="error"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />
                ))}
                <Button
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={() => append({value: ''})}
                >
                    Добавить адрес
                </Button>
            </Stack>
        </Box>
    );
};
