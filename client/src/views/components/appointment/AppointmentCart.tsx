import { Button, Grid, Typography } from '@mui/material';

interface ICart {
    _id: number;
    name: string;
    time: string;
    space: number;
}

const AppointmentCart = ({ cart }: { cart: ICart }) => {
    return (
        <Grid
            item
            md={4}
            sm={6}
            xs={12}
            sx={{ border: 1, borderColor: 'primary.main' }}
        >
            <Typography
                align="center"
                variant="h6"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
            >
                {cart.name}
            </Typography>
            <Typography align="center" variant="h6" sx={{ fontWeight: 'bold' }}>
                {cart.time}
            </Typography>
            <Typography align="center" sx={{ fontWeight: 'bold' }}>
                {cart.space} SPACE AVAILABLE
            </Typography>

            <Button variant="contained" sx={{ m: 'auto', display: 'block' }}>
                Book Appointment
            </Button>
        </Grid>
    );
};

export default AppointmentCart;
