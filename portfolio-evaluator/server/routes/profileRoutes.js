import express from "express";
import { getProfileReport } from "../controller/profileController.js";

const router = express.Router();

router.post("/", getProfileReport);

export default router;
