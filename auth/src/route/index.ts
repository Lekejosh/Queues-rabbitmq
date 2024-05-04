import express from "express";
const router = express.Router();
import Register from "../controller";

router.route("/register").post(Register.regis);

export default router;
