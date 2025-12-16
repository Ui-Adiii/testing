import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import { generateAuthToken } from "../utils/token.js";
const login = async (req, res, next) => { 
  try {
    const { email, password } = req.body;
    if(!email || !password || email.trim() === "" || password.trim() === ""){
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      }); 
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }
    const token = generateAuthToken(user._id, process.env.JWT_SECRET);
    if (!token) {
      return res.status(500).json({
        success: false,
        message: "Error generating authentication token",
      });
    }
    
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure:true
      })
      .status(200)
      .json({
        success: true,
        message: "User logged in successfully",
        data: {
          id: user._id,
          email: user.email,
        },
      }); 
    
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
}
const register =async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password || email.trim() === "" || password.trim() === ""){
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }
    const userExists = await User.findOne({ email });
    if(userExists){
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ email, password: hashPassword });
    if (!newUser) {
      return res.status(500).json({
        success: false,
        message: "Error creating user",
      });
    }
    const token = generateAuthToken(newUser._id, process.env.JWT_SECRET); ;
    if(!token){
      return res.status(500).json({
        success: false, 
        message: "Error generating authentication token",
      });
    }
    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, 
        secure:true
      })
      .status(201)
      .json({
        success: true,
        message: "User registered successfully",
        data: {
          id: newUser._id,
          email: newUser.email,
        },
      });

  } catch (error) {
    error.statusCode = error.statusCode ||  500;
    next(error);
  }
}

const deleteUser = async(req, res, next) => {
  try {
    const userId =req.userId || req.body.userId;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }
    await User.findByIdAndDelete(userId);
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    next(error);
  }
 }

const logOut = (req, res, next) => {
  try {
    return res
      .cookie("token", "", {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 0,
        secure: true
      })
      .status(200)
      .json({
        success: true,
        message: "User logged out successfully",
      });
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
 }

export { login, register, deleteUser, logOut };