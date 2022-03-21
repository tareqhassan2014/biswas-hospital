import { model, Schema } from 'mongoose';
import IUser from './auth.interface';

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
            unique: true,
        },
        phone: {
            type: String,
            required: [true, 'Phone number id required'],
        },
        role: {
            type: String,
            default: 'user',
            enum: ['admin', 'merchant', 'user'],
        },
        status: {
            type: String,
            default: 'pending',
            enum: ['pending', 'verified', 'blocked'],
        },
        img: String,
        password: {
            type: String,

            minlength: [
                6,
                'Password should be greater than or equal 6 character!',
            ],
        },
    },
    { timestamps: true }
);

export default model<IUser>('User', UserModel);
