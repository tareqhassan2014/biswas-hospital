import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
            <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {data.map((cart) => (
                    <AppointmentCart key={cart._id} cart={cart} />
                ))}
            </Grid>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>xs=2</Item>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default AvailableAppointment;
