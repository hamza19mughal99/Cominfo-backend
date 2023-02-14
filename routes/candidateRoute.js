import express from "express";
import { RegisterIframe, GetIframes } from "../controllers/cand.controller.js";

const router = express.Router();

router.post('/register', RegisterIframe)

router.get('/get', GetIframes)

export default router;