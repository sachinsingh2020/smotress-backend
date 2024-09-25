import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/userModal.js";
import { Address } from "../models/addressModal.js";
import ApiFeatures from "../utils/apiFeatures.js";


export const newAdress = catchAsyncError(async (req, res, next) => {
    const { name, address } = req.body;

    const newAddress = await Address.create({
        address
    });

    let user = await User.findOne({ name });

    if (user) {
        user.address.push(newAddress._id);
        await user.save();
    } else {
        user = await User.create({
            name,
            address: [newAddress._id]
        });
    }

    res.status(200).json({
        success: true,
        user,
        message: 'Address created successfully'
    });
});

export const showData = catchAsyncError(async (req, res, next) => {

    const apiFeatures = new ApiFeatures(User.find().populate('address'), req.query).filter()

    let users = await apiFeatures.query;

    res.status(200).json({
        success: true,
        users
    });
});