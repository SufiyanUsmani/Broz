const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    verificationToken: String,
    addresses: [
        {
            name: String,
            mobileNo: String,
            houseNo: String,
            street: String,
            landMark: String,
            city: String,
            country: String,
            postalCode: String,
        }
    ],
    // orders: [
    //     {
    //         type: mongoose.Schema.Types.ObjectTd,
    //         ref: "Order",
    //     },
    // ],
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User