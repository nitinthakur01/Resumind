import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import { analyzeResume } from "../controllers/ai.js";

const router = express.Router();

router.post("/analyze", isAuth, analyzeResume);

export default router;