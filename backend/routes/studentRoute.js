import express  from "express";
import { addTodayAttendance, studentData } from "../controller/student.js";

const studentroute=express.Router()

studentroute.route("/attendance/today").post(addTodayAttendance)
studentroute.route("/data").post(studentData)

export default studentroute