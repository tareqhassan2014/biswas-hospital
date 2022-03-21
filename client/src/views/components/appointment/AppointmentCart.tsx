import { Button, Grid, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import AppointmentModal from './AppointmentModal';

interface IBooking {
    _id: number;
    name: string;
    time: string;
    space: number;
}

const AppointmentCart = ({ booking }: { booking: IBooking }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => setOpenModal(!openModal);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 2 }}>
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{ color: 'primary.main', fontWeight: 'bold' }}
                    >
                        {booking.name}
                    </Typography>
                    <Typography
                        align="center"
                        variant="h6"
                        sx={{ fontWeight: 'bold' }}
                    >
                        {booking.time}
                    </Typography>
                    <Typography align="center" sx={{ fontSize: '13px' }}>
                        {booking.space} SPACE AVAILABLE
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ mx: 'auto', my: 2, display: 'block' }}
                        onClick={handleModal}
                    >
                        Book Appointment
                    </Button>
                </Paper>
            </Grid>
            <AppointmentModal
                open={openModal}
                handleModal={handleModal}
                booking={booking}
            />
        </>
    );
};

export default AppointmentCart;
