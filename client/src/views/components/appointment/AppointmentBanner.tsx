import { Grid } from '@mui/material';
import Calender from '../common/Calender';

const AppointmentBanner = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
                <Calender />
            </Grid>
            <Grid item xs={12} md={7}>
                Banner
            </Grid>
        </Grid>
    );
};

export default AppointmentBanner;
