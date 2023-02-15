import express from "express";
import { RegisterIframe, GetIframes, DeleteIframe } from "../controllers/cand.controller.js";

const router = express.Router();

router.post('/register', RegisterIframe)

router.get('/get', GetIframes)

router.delete('/delete/:id', DeleteIframe)

export default router;