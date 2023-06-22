import express  from "express";
import { homepage } from "../controller/homepageControler.js";

const homeroute=express.Router()

homeroute.route("/").get(homepage)

export default homeroute