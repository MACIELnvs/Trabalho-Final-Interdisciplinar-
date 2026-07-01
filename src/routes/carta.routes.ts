import { Router } from "express";
import cartaController from "../controller/carta.routes.controller";

const router = Router();

router.get("/", cartaController.mostrarCartas);
router.get("/pesquisar/:criterio", cartaController.pesquisar);
router.get("/colecao/:criterio", cartaController.pesquisarCartaPorColecao); // http://localhost:3000/cartas/colecao/Secret%20Rare
router.get("/:id", cartaController.buscarCartaIndice);
router.post("/", cartaController.criar);
router.put("/:id", cartaController.atualizar);
router.delete("/:id", cartaController.remover);

export default router;