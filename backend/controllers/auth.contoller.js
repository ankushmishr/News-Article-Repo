import bcryptjs from "bcryptjs"
import User from "../models/User.model.js"
import jwt from "jsonwebtoken"
// import { errorHandler } from "../utils/error.js"
// import  {errorHandler} from "../utils/error.js"
import { errorHandler } from "../utils/Error.js"
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body || {}

    // ✅ Add return here to stop further execution if validation fails
    if (!username || !email || !password || username === "" || email === "" || password === "") {
        return next(errorHandler(400, "All fields are required"));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try {
        await newUser.save();
        res.status(200).json("SignUp Successful");
    } catch (error) {
        next(error);
    }
};



export const signin = async (req, res, next) => {
    const { email, password } = req.body || {}
    if (!email || !password || email === "" || password === "") {
        return next(errorHandler(400, "All fields are required"));
    }
    try {
        const validateUser =await User.findOne({email})
        if(!validateUser){
            return next(errorHandler(404,"User not Found"))
        }
        const validatePassword =bcryptjs.compareSync(password,validateUser.password) 
        if(!validatePassword){
            return next(errorHandler(400,"Wrong Password"))
        }
        const token = jwt.sign({id:validateUser._id}, process.env.JWT_SECRET);
        const {password:pass,...rest} =validateUser._doc

        res.status(200).cookie("access_token",token,{httpOnly:true}).json(validateUser)
    } catch (error) {
        next(error)
    }
}