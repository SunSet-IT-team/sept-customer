import React, {useState} from 'react';
import {
    Box,
    Button,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

export const AddressesBlock: React.FC<{onEdit: () => void}> = ({onEdit}) => {
    const [isShowNewAddress, setIsShowNewAddress] = useState(false);

    const [addresses, setAddresses] = useState([
        {id: 1, value: 'ул. Ленина, д. 10, кв. 25', editing: false},
        {id: 2, value: 'пр. Мира, д. 42', editing: false},
    ]);

    const [newAddress, setNewAddress] = useState('');

    const handleAdd = () => {
        if (newAddress.length < 2) return;

        setAddresses([
            ...addresses,
            {id: Date.now(), value: newAddress, editing: false},
        ]);
        setNewAddress('');
        setIsShowNewAddress(false);
        onEdit();
    };

    const handleDelete = (id: number) => {
        setAddresses(addresses.filter((addr) => addr.id !== id));
        onEdit();
    };

    const handleEdit = (id: number) => {
        setAddresses(
            addresses.map((addr) =>
                addr.id === id ? {...addr, editing: !addr.editing} : addr
            )
        );
        onEdit();
    };

    const handleChange = (id: number, value: string) => {
        setAddresses(
            addresses.map((addr) => (addr.id === id ? {...addr, value} : addr))
        );
    };

    return (
        <Box>
            <Typography
                variant="h6"
                gutterBottom
                sx={{mb: 2, textAlign: 'center'}}
            >
                Мои адреса
            </Typography>

            {addresses.map((address) => (
                <Box
                    key={address.id}
                    sx={{mb: 2, display: 'flex', alignItems: 'center'}}
                >
                    <TextField
                        value={address.value}
                        onChange={(e) =>
                            handleChange(address.id, e.target.value)
                        }
                        disabled={!address.editing}
                        fullWidth
                        variant="outlined"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Box
                                            onClick={() =>
                                                handleEdit(address.id)
                                            }
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'primary.main',
                                                mr: 1,
                                            }}
                                        >
                                            {address.editing ? (
                                                <CheckIcon />
                                            ) : (
                                                <EditIcon />
                                            )}
                                        </Box>
                                        <DeleteIcon
                                            onClick={() =>
                                                handleDelete(address.id)
                                            }
                                            sx={{
                                                cursor: 'pointer',
                                                color: 'error.main',
                                            }}
                                        />
                                    </InputAdornment>
                                ),
                            },
                        }}
                        sx={{mr: 2}}
                    />
                </Box>
            ))}

            {isShowNewAddress ? (
                <TextField
                    placeholder="Новый адрес"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                    fullWidth
                    variant="outlined"
                    sx={{mr: 2}}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Box
                                        onClick={handleAdd}
                                        sx={{
                                            cursor: 'pointer',
                                            color: 'primary.main',
                                            mr: 1,
                                        }}
                                    >
                                        <CheckIcon />
                                    </Box>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            ) : (
                <Button
                    variant="contained"
                    fullWidth
                    onClick={() => setIsShowNewAddress(true)}
                >
                    Добавить
                </Button>
            )}
        </Box>
    );
};
