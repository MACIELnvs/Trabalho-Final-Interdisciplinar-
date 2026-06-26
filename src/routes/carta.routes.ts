import { Router } from "express";
import cartaController from "../controller/carta.routes.controller";

const router = Router();

router.get("/", cartaController.index);
router.get("/:id", cartaController.show);
router.delete("/:id", cartaController.destroy);

export default router;