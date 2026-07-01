"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import cartaService from "../services/carta.service";
const index_1 = require("../index");
async function mostrarCartas(req, res) {
    return res.json(index_1.controller.listar().map(c => c.toString()));
}
async function buscarCartaIndice(req, res) {
    const carta = index_1.controller.listar().find(c => c.id === Number(req.params.id));
    if (!carta) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }
    return res.json(carta.toString());
}
async function remover(req, res) {
    const removida = index_1.controller.remover(Number(req.params.id));
    if (!removida) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }
    // await cartaService.deletar(Number(req.params.id)); 
    return res.status(204).send();
}
async function criar(req, res) {
    const carta = index_1.controller.construirCarta(req.body);
    const adicionada = index_1.controller.adicionar(carta);
    if (!adicionada) {
        return res.status(409).json({ message: "Carta com ID repetido." });
    }
    //await cartaService.salvar(carta); 
    return res.status(201).json(carta.toString());
}
async function atualizar(req, res) {
    const carta = index_1.controller.construirCarta(req.body);
    const atualizada = index_1.controller.atualizar(Number(req.params.id), carta);
    if (!atualizada) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }
    // await cartaService.atualizar(Number(req.params.id), carta); 
    return res.json(carta.toString());
}
async function pesquisar(req, res) {
    const criterio = req.params.criterio;
    if (!criterio) {
        return res.status(400).json({ message: "Critério não informado." });
    }
    const resultado = index_1.controller.pesquisarPorCriterio(criterio);
    return res.json(resultado.map(c => c.toString()));
}
async function pesquisarCartaPorColecao(req, res) {
    const criterio = req.params.criterio;
    if (!criterio) {
        return res.status(400).json({ message: "Critério não informado." });
    }
    const resultado = index_1.controller.pesquisarCartasPorColecao(criterio);
    return res.json(resultado.map(c => c.toString()));
}
exports.default = { mostrarCartas, buscarCartaIndice, criar, atualizar, remover, pesquisar, pesquisarCartaPorColecao };
