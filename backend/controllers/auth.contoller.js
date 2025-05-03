import bcryptjs from "bcryptjs"
import User from "../models/User.model.js"
export const signup = async (req, res) => {
    const { username, email, password } = req.body||{}
    if (!username ||  !email || !password || username === "" || email === "" || password === "") {
        return res.status(400).json({ message: "All folders are required" })
    }
    const hashedPassword = bcryptjs.hashSync
    const newUser = new User({
        username, email, password: hashedPassword,
    })
    try {
        await newUser.save()
        res.status(200).json("SignUp Sucessfull")
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}