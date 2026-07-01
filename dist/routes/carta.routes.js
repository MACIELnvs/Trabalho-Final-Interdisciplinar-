"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carta_routes_controller_1 = __importDefault(require("../controller/carta.routes.controller"));
const router = (0, express_1.Router)();
router.get("/", carta_routes_controller_1.default.mostrarCartas);
router.get("/pesquisar/:criterio", carta_routes_controller_1.default.pesquisar);
router.get("/colecao/:criterio", carta_routes_controller_1.default.pesquisarCartaPorColecao); // antes de /:id
router.get("/:id", carta_routes_controller_1.default.buscarCartaIndice);
router.post("/", carta_routes_controller_1.default.criar);
router.put("/:id", carta_routes_controller_1.default.atualizar);
router.delete("/:id", carta_routes_controller_1.default.remover);
exports.default = router;
