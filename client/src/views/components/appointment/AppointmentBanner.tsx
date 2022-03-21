import { Grid } from '@mui/material';
import banner from '../../../assets/image/appointment-banner.webp';
import Calender from '../common/Calender';

const AppointmentBanner = () => {
    return (
        <Grid container alignItems="center" sx={{ my: 5 }}>
            <Grid item xs={12} md={6}>
                <img src={banner} alt="banner" style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Calender />
            </Grid>
        </Grid>
    );
};

export default AppointmentBanner;
