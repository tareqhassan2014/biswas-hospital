import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../../Hooks/useAuth';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

interface IBooking {
    _id: number;
    name: string;
    time: string;
    space: number;
}

interface IProps {
    open: boolean;
    handleModal: () => void;
    booking: IBooking;
}

type Inputs = {
    name: string;
    email: string;
    time: string;
    phone: string;
};

export default function AppointmentModal({
    open,
    handleModal,
    booking,
}: IProps) {
    const dispatch = useDispatch();
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);

        reset();
    };

    return (
        <Modal
            open={open}
            onClose={handleModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    align="center"
                    sx={{ color: 'primary.main' }}
                >
                    {booking.name}
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        fullWidth
                        label="Time"
                        margin="normal"
                        id="name"
                        defaultValue={booking.time}
                        sx={{ mb: 2 }}
                        {...register('time')}
                    />

                    <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        value={user?.name}
                        sx={{ mb: 2 }}
                        {...register('name')}
                    />
                    <TextField
                        value={user?.email}
                        margin="normal"
                        fullWidth
                        id="email"
                        autoComplete="email"
                        {...register('email')}
                    />
                    <TextField
                        error={Boolean(errors.phone)}
                        label={Boolean(errors.phone) ? 'Error' : 'Phone'}
                        helperText={errors.phone?.message}
                        margin="normal"
                        fullWidth
                        type="text"
                        id="phone"
                        autoComplete="phone"
                        {...register('phone', {
                            required: 'Phone number is required',
                        })}
                    />

                    <LoadingButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        loading={false}
                    >
                        Confirm Appointment
                    </LoadingButton>
                </Box>
            </Box>
        </Modal>
    );
}
