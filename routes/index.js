import { Router } from "express";
import healthCheckRoutes from './healthcheck.routes.js';
import dataRoutes from './../routes/data.routes.js';

const router = Router();

router.use("/healthcheck", healthCheckRoutes)
router.use("/data", dataRoutes)

export default router;