import bcryptjs from "bcryptjs"
import User from "../models/User.model.js"
// import { errorHandler } from "../utils/error.js"
// import  {errorHandler} from "../utils/error.js"
import  {errorHandler} from "../utils/Error.js"
export const signup = async (req, res , next) => {
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
