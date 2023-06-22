import { Router } from "express";
import { addPost, getPost } from "../controller/postController.js";

const postRoutes=Router()

postRoutes.route("/add").post(addPost)
postRoutes.route("/get").post(getPost)

export default postRoutes