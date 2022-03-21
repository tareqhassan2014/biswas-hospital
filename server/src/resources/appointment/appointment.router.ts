import { Router } from 'express';
import {
    createAppointment,
    deleteAppointment,
    getAllAppointments,
    getAppointmentByID,
    updateAppointment,
} from './appointment.controller';

const appointmentRouter = Router();

appointmentRouter.route('/').get(getAllAppointments).post(createAppointment);

appointmentRouter
    .route('/:id')
    .get(getAppointmentByID)
    .patch(updateAppointment)
    .delete(deleteAppointment);
export default appointmentRouter;
