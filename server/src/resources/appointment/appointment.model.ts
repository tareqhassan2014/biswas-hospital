import { model, Schema } from 'mongoose';
import IAppointment from './appointment.interface';

const UserModel = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required!'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required!'],
            trim: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: [true, 'Phone number id required'],
        },
        time: {
            type: String,
            required: [true, 'Time id required'],
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        status: {
            type: String,
            default: 'pending',
            enum: ['pending', 'approve', 'canceled'],
        },
        date: Date,
    },
    { timestamps: true }
);

export default model<IAppointment>('Appointment', UserModel);
