import { Router } from 'express';
import {
    createAppointment,
    deleteAppointment,
    getAllAppointments,
    getAppointmentByEmail,
    updateAppointment,
} from './appointment.controller';

const appointmentRouter = Router();

appointmentRouter.route('/user/:email').get(getAppointmentByEmail);

appointmentRouter
    .route('/:id')
    .patch(updateAppointment)
    .delete(deleteAppointment);

appointmentRouter.route('/').get(getAllAppointments).post(createAppointment);

export default appointmentRouter;
