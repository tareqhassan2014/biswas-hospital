import { Document, Schema } from 'mongoose';

export default interface IAppointment extends Document {
    name: string;
    email: string;
    time: string;
    phone: string;
    user: Schema.Types.ObjectId;
    status: string;
    date: Date;
}
