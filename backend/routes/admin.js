import express  from "express";
import { addDepartment,getDepartment } from "../controller/admin.js";


const adminRoutes=express.Router()

adminRoutes.route("/department").get(getDepartment)
adminRoutes.route("/department").post(addDepartment)

export default adminRoutes