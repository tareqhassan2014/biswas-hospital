import { Router } from 'express';
import {
    createDoctor,
    deleteDoctor,
    getAllDoctors,
    getDoctorByID,
    updateDoctor,
} from './doctor.controller';

const doctorRouter = Router();

doctorRouter.route('/').get(getAllDoctors).post(createDoctor);

doctorRouter
    .route('/:id')
    .get(getDoctorByID)
    .patch(updateDoctor)
    .delete(deleteDoctor);
export default doctorRouter;
