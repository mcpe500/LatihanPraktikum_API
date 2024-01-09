import { Router } from "express";
import { LoginHandler, registerHandler } from "../Controller/AuthController";

const router = Router();

router.post("/login", LoginHandler);
router.post(".register", registerHandler);

export default router;
