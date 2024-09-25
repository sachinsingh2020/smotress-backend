import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Address = mongoose.model('Address', schema);