import { Container } from '@mui/material';
import AppointmentBanner from '../../components/appointment/AppointmentBanner';
import AvailableAppointment from '../../components/appointment/AvailableAppointment';

const Appointment = () => {
    return (
        <Container>
            <AppointmentBanner />
            <AvailableAppointment />
        </Container>
    );
};

export default Appointment;
