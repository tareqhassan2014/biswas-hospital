import { Request, Response } from 'express';
import responseGenerator from '../../utility/responseGenerator';
import doctorModel from './doctor.model';

export const getAllDoctors = async (req: Request, res: Response) => {
    try {
        const doctors = await doctorModel.find();
        res.status(200).json(responseGenerator(doctors, 'successfully', false));
    } catch (err: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', err.message, true));
    }
};

export const createDoctor = async (req: Request, res: Response) => {
    try {
        const doctor = await doctorModel.create(req.body);
        res.status(201).json(
            responseGenerator(doctor, 'successfully add doctor', false)
        );
    } catch (error: any) {
        res.status(500).json(responseGenerator('fail', error.message, true));
    }
};

export const updateDoctor = async (req: Request, res: Response) => {
    try {
        const doctor = await doctorModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(201).json(
            responseGenerator(doctor, 'doctor update successfully', false)
        );
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};

export const getDoctorByID = async (req: Request, res: Response) => {
    try {
        const doctor = await doctorModel.findById(req.params.id);
        res.status(201).json(responseGenerator(doctor, '', false));
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};

export const deleteDoctor = async (req: Request, res: Response) => {
    try {
        const doctor = await doctorModel.findByIdAndDelete(req.params.id);
        res.status(201).json(
            responseGenerator(doctor, 'Doctor deleted successfully', false)
        );
    } catch (error: any) {
        return res
            .status(500)
            .json(responseGenerator('fail', error.message, true));
    }
};

export default {
    deleteDoctor,
    getDoctorByID,
    updateDoctor,
    createDoctor,
    getAllDoctors,
};
