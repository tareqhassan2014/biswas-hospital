import { Request, Response } from 'express';
import responseGenerator from '../../utility/responseGenerator';
import AppointmentModel from './appointment.model';

export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const Appointments = await AppointmentModel.find();
        res.status(200).json(
            responseGenerator(Appointments, 'successfully', false)
        );
    } catch (err: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', err.message, true));
    }
};

export const createAppointment = async (req: Request, res: Response) => {
    try {
        const Appointment = await AppointmentModel.create(req.body);
        res.status(201).json(
            responseGenerator(
                Appointment,
                'successfully add Appointment',
                false
            )
        );
    } catch (error: any) {
        res.status(500).json(responseGenerator('fail', error.message, true));
    }
};

export const updateAppointment = async (req: Request, res: Response) => {
    try {
        const Appointment = await AppointmentModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(201).json(
            responseGenerator(
                Appointment,
                'Appointment update successfully',
                false
            )
        );
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};

export const getAppointmentByEmail = async (req: Request, res: Response) => {
    try {
        const Appointment = await AppointmentModel.find({
            email: req.params.email,
        });
        console.log({
            email: req.params.email,
        });

        res.status(200).json(responseGenerator(Appointment, '', false));
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};

export const deleteAppointment = async (req: Request, res: Response) => {
    try {
        const Appointment = await AppointmentModel.findByIdAndDelete(
            req.params.id
        );
        res.status(201).json(
            responseGenerator(
                Appointment,
                'Appointment deleted successfully',
                false
            )
        );
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};

export default {
    deleteAppointment,
    getAppointmentByEmail,
    updateAppointment,
    createAppointment,
    getAllAppointments,
};
