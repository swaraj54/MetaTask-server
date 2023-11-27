import { Router } from "express";
import { helloWorld } from "../controllers/healthCheck.controllers.js";
import { logMiddleware } from "../middlewares/log.middleware.js";

const router = Router();

router.get('/hello-world', logMiddleware, helloWorld)


export default router;