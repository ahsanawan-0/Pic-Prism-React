const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {generateAccessToken} = require("../helpers/accessToken");
const {generateRefreshToken} = require("../helpers/refreshToken");

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
      const user = new User({
        username,
        email,
        password: passwordHash,
        accountType,
      });
      await user.save();
      res.status(201).json({
        success: true,
        message: "User Created Successfully",
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
      return await User.findOne({ username }).select('+password');;
    };

    const findUserByEmail = async (email) => {
      return await User.findOne({ email }).select('+password');;
    };
    try {
      const isEmail = usernameOrEmail.includes("@");
      const user = isEmail
      ? await findUserByEmail(usernameOrEmail)
      : await findUserByUsername(usernameOrEmail);
      
      console.log('User Data:', user);
      console.log('Password Provided:', password);
console.log('User Password (hashed):', user.password);

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
      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);
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
};
