import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Address'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const User = mongoose.model('User', schema);