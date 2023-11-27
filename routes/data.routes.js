import { Router } from "express";
import { analyticsData } from "../Controllers/data.controllers.js";

const router = Router();

router.get('/analytics-data', analyticsData)


export default router;