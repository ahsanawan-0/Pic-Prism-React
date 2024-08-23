const nodemailer = require("nodemailer");
const User = require("../models/userModel");

const verifyOtp=require("../helpers/OtpVerification")
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../helpers/accessToken");
const { generateRefreshToken } = require("../helpers/refreshToken");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendVerificationEmail = async (user) => {
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: user.email,
    subject: "Verify Your Email",
    text: `Your verification code is: ${user.verificationToken}`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = {
  signup: async (req, res) => {
    const { username, email, password, accountType } = req.body;
    try {
      let userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({
          success: false,
          message: "User already exists",
        });
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const verificationToken = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      const user = new User({
        username,
        email,
        password: passwordHash,
        accountType,
        verificationToken,
        verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      });
      await user.save();

      await sendVerificationEmail(user);

      res.status(201).json({
        success: true,
        message: "User Created Successfully ",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  login: async (req, res) => {
    const { usernameOrEmail, password } = req.body;
    const findUserByUsername = async (username) => {
      return await User.findOne({ username }).select("+password");
    };

    const findUserByEmail = async (email) => {
      return await User.findOne({ email }).select("+password");
    };
    try {
      const isEmail = usernameOrEmail.includes("@");
      const user = isEmail
        ? await findUserByEmail(usernameOrEmail)
        : await findUserByUsername(usernameOrEmail);

      if (!user) return res.status(401).json({ message: "Please SignUp" });

      const comparedPassword = await bcrypt.compare(password, user.password);

      if (!comparedPassword) {
        return res.status(401).json({ message: "Wrong Password" });
      }
      const data = {
        id: user._id,
        accountType: user.accountType,
        author: user.username,
      };
      // console.log(data)

      const accessToken = generateAccessToken(data);
      const refreshToken = generateRefreshToken(data);
      console.log("Access Token:", accessToken);
      console.log("Refresh Token:", refreshToken);
      return res.status(200).json({
        success: true,
        message: "Login Successfully",
        accessToken,
        refreshToken,
        role: user.accountType,
        author: user.username,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  },
  // Endpoint to verify OTP
  otp:async (req, res) => {
    const { otp } = req.body; // OTP from the frontend

    try {
        // Find the user with the matching verification token
        const user = await User.findOne({ verificationToken: otp });

        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid OTP' });
        }

        // Verify the OTP
        const result = verifyOtp(otp, user.verificationToken, user.verificationTokenExpiresAt);

        if (result.success) {
            // OTP is valid, update user as verified
            user.isVerified = true;
            user.verificationToken = null; // Clear the verification token after verification
            user.verificationTokenExpiresAt = null; // Clear the expiration time
            await user.save();

            res.json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
}

};
