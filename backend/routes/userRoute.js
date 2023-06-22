import express  from "express";
import { login, logout, register, studentLogin, studentOTPSent, studentRegister, studentSetPassword } from "../controller/userControler.js";


const userAuthRoutes=express.Router()

userAuthRoutes.route("/login").post(login)
userAuthRoutes.route("/studentLogin").post(studentLogin)
userAuthRoutes.route("/register").post(register)
userAuthRoutes.route("/studentSignup").post(studentRegister)
userAuthRoutes.route("/studentOTPSent").post(studentOTPSent)
userAuthRoutes.route("/studentSetPassword").post(studentSetPassword)
userAuthRoutes.route("/logout").get(logout)


export default userAuthRoutes