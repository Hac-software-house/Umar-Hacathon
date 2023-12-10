import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    cnic: { type: String, required: true },
    phone: { type: String, required: true },
    
})

export const patientModel = mongoose.models?.patients || mongoose.model('patients', ProductsSchema)