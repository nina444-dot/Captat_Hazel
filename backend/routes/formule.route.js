import express from "express";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import { 
    getAllFormules, 
    getFormulesBySeanceTitre, 
    addFormule, 
    editFormule, 
    removeFormule 
} from "../controllers/formule.controller.js";

const router = express.Router();

router.get("/", getAllFormules);
router.get("/seance/:titre", getFormulesBySeanceTitre);

router.post("/", authMiddleware, addFormule);
router.put("/:id", authMiddleware, editFormule);
router.delete("/:id", authMiddleware, removeFormule);

export default router;