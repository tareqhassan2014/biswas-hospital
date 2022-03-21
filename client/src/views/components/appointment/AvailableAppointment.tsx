import { Grid, Typography } from '@mui/material';
import { useDate } from '../../../Hooks/useDate';
import AppointmentCart from './AppointmentCart';

const data = [
    {
        _id: 1,
        name: 'Oral Surgery',
        time: '07:00 PM - 08:00 PM',
        space: 9,
    },
    {
        _id: 2,
        name: 'Oral Surgery',
        time: '07:00 PM - 08:00 PM',
        space: 9,
    },
    {
        _id: 3,
        name: 'Oral Surgery',
        time: '07:00 PM - 08:00 PM',
        space: 9,
    },
    {
        _id: 4,
        name: 'Oral Surgery',
        time: '07:00 PM - 08:00 PM',
        space: 9,
    },
    {
        _id: 5,
        name: 'Oral Surgery',
        time: '07:00 PM - 08:00 PM',
        space: 9,
    },
    {
        _id: 6,
        name: 'Oral Surgery',
        time: '07:00 PM - 08:00 PM',
        space: 9,
    },
];

const AvailableAppointment = () => {
    const { date } = useDate();
    return (
        <>
            <Typography
                align="center"
                variant="h5"
                sx={{ color: 'primary.main', fontWeight: 'bold', mb: 6 }}
                gutterBottom
            >
                Available Appointment on {date && new Date(date).toDateString()}
            </Typography>

            <Grid container spacing={{ xs: 2, md: 3 }}>
                {data.map((booking) => (
                    <AppointmentCart key={booking._id} booking={booking} />
                ))}
            </Grid>
        </>
    );
};

export default AvailableAppointment;
