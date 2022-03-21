import { model, Schema } from 'mongoose';
import IDoctor from './doctor.interface';

const ProductModel = new Schema({
    name: {
        type: String,
        required: [true, 'Name is Required!'],
        maxlength: [20, "Name can't longer than 20 character"],
    },
    department: {
        type: String,
        required: [true, 'department is Required!'],
    },
    img: {
        type: String,
        required: [true, 'Image is Required!'],
    },
});

export default model<IDoctor>('Doctor', ProductModel);
