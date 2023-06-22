import {
    userLoginSchema
} from "../modal/authSchema.js";
import bcrypt from "bcrypt"
import {
    studentSchema
} from "../modal/student.js";

export const login = async (req, res) => {

    console.log("login attemped")

    const {
        email,
        password
    } = req.body
    console.log(email, password)

    if (!email || !password) return res.status(403).send("Enter both the values of Email and Password ")

    const user = await userLoginSchema.findOne({
        email
    }).select("+password")
    console.log(user)
    if (!user) return res.status(402).send("Something is wrong in password or user")

    bcrypt.compare(password, user.password, (err, matched) => {
        if (matched) {
            return res.status(200).send({
                token: user.getToken()
            })
        } else {
            return res.status(400).send("Something is wrong in password or user")
        }
    })
}

export const register = async (req, res) => {

    console.log("register attemped")

    const {
        name,
        email,
        password
    } = req.body

    if (!email || !password || !name) return res.status(403).send("Enter all values of Name, Email and Password ")


    const user = await userLoginSchema.findOne({
        email
    })
    if (user) {
        return res
            .status(400)
            .json({
                success: false,
                message: "user already exists"
            })
    }

    const newUser = await userLoginSchema.create({
        name,
        email,
        password
    })
    res.status(201).send({
        token: newUser.getToken()
    })
}

export const studentLogin = async (req, res) => {

    console.log("studentLogin attemped")

    const {
        email,
        password
    } = req.body
    console.log(email, password)

    if (!email || !password) return res.status(403).send("Enter both the values of Email and Password ")

    const user = await studentSchema.findOne({
        email
    }).select("+password")
    console.log(user)

    if (!user) return res.status(402).send("Something is wrong in password or user")

    const isValid=await user.compairPassword(password)

        if (isValid) {
            const token=await user.generateToken()
            return res.status(200).send({
                token: token,
                data:{name:user.name,email:user.email,number:user.number,role:user.role}
            })
        } else {
            return res.status(400).send("Something is wrong in password or user")
        }

}

export const studentRegister = async (req, res) => {

    console.log("studentRegister attemped")

    const {
        name,
        email,
        number
    } = req.body

    // if (!email || !number || !name) return res.status(403).send("Enter all values of Name, Email and number ")

    const user = await studentSchema.findOne({
        name
    })
    console.log(user)
    if (user) {
        await user.OTPGenerate()

        user.save()

        return res
            .status(200)
            .json({
                success: true,
                message: "Otp generated"
            })
    }


    res.status(500).send({success:false
    })
}

export const studentOTPSent = async (req, res) => {

    console.log("studentOTPSent attemped---------------------------------")

    const {
        name,
        email,
        number,
        OTP
    } = req.body
    console.log(req.body)

    // if (!email || !number || !name) return res.status(403).send("Enter all values of Name, Email and number ")

    const user = await studentSchema.findOne({
        name
    })
    console.log(user)
    if (user) {
    user.OTP=parseInt(OTP)
        user.save()

        return res
            .status(200)
            .json({
                success: true,
                message: "Otp generated"
            })
    }


    res.status(500).send({success:false
    })
}

export const studentSetPassword = async (req, res) => {

    console.log("studentSetPassword attemped")

    const {
        name,
        email,
        number,
        newPassword
    } = req.body

    // if (!email || !number || !name) return res.status(403).send("Enter all values of Name, Email and number ")

    const user = await studentSchema.findOne({
        name
    })
    console.log(user)
    if (user) {

        user.password=newPassword
        user.save()

        return res
            .status(201)
            .json({
                success: true,
                message: "Otp generated"
            })
    }


    res.status(500).send({success:false
    })
}

export const logout = async (req, res) => {
    console.log("called")
    res.status(200).send({success:true})
}