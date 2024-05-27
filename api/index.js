const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('./models/user');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Email sending function
const sendVerificationEmail = async (email, verificationToken) => {
    console.log(email, verificationToken,"verifyjjjj")
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "usmanisufiyan0755@gmail.com",
            pass: "USM36ani"
        }
    });
    const mailOptions = {
        from: "usmanisufiyan25467@gmail.com",
        to: "usmanisufiyan25467@gmail.com",
        subject: "Email Verification",
        text: `Please click the following link to verify your email: http://localhost:800/verify/${verificationToken}`
    };
    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log("Error sending verification Email", error);
    }
};

// function sendVerificationSMS(phone, token) {
//     // Implementation for sending SMS with the verification token
//     console.log(`Sending SMS to ${phone} with token ${token}`);
// }

// Endpoint to register in the app
app.post("/register", async (req, res) => {
    try {
        const { phone } = req.body;
        if (!phone) {
            return res.status(400).json({ message: "Phone number is required" });
        }

        console.log(phone);
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            console.log("Phone number already registered:", phone);
            return res.status(400).json({ message: "Phone number already registered" });
        }

        const newUser = new User({ phone });
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");
        console.log(newUser,"newUser")
        await newUser.save();
        console.log("New User Registered:", newUser);
        sendVerificationEmail(newUser.phone, newUser.verificationToken); 
        res.status(200).json({ message: "User registered successfully. Verification sent." });
    } catch (error) {
        console.log("Error registering user", error);
        res.status(500).json({ message: "Registration failed" });
    }
});

// Connect to MongoDB and start the server
mongoose.connect('mongodb+srv://usmanisufiyan:9326625647@cluster0.x0pz5i6.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(800, () => {
        console.log('Server is running on port 800');
    });
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});
