import { Router } from "express";
import { analyticsData } from "../controllers/data.controllers.js";

const router = Router();

router.get('/analytics-data', analyticsData)


export default router;