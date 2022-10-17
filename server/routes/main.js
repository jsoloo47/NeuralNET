import express from "express";
import { getIndex, postUser, postLogin } from "../controllers/home.js";

const router = express.Router();

//Main Routes - simplified for now
router.get("/", getIndex);
router.post("/api/register", postUser);
router.post("/api/login", postLogin);

export default router;
