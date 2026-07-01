"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarCartas = listarCartas;
exports.pesquisarCartasCriterio = pesquisarCartasCriterio;
exports.pesquisarCartasPorColecao = pesquisarCartasPorColecao;
exports.buscarCarta = buscarCarta;
exports.criarCarta = criarCarta;
exports.atualizarCarta = atualizarCarta;
exports.removerCarta = removerCarta;
async function listarCartas() {
    try {
        const response = await fetch("http://localhost:3000/cartas");
        if (!response.ok) {
            throw new Error("Erro ao buscar cartas.");
        }
        return await response.json();
    }
    catch (erro) {
        console.error(erro);
        return [];
    }
}
async function pesquisarCartasCriterio(criterio) {
    try {
        const response = await fetch(`http://localhost:3000/cartas/pesquisar/${criterio}`);
        if (!response.ok) {
            throw new Error("Erro ao pesquisar cartas por criterio.");
        }
        return await response.json();
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
async function pesquisarCartasPorColecao(criterio) {
    try {
        const response = await fetch(`http://localhost:3000/cartas/colecao/${criterio}`);
        if (!response.ok) {
            throw new Error("Erro ao pesquisar cartas por coleção.");
        }
        return await response.json();
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
async function buscarCarta(id) {
    try {
        const response = await fetch(`http://localhost:3000/cartas/${id}`);
        if (!response.ok) {
            throw new Error("Erro ao buscar carta.");
        }
        return await response.json();
    }
    catch (erro) {
        console.error(erro);
        return null;
    }
}
async function criarCarta(id, nome, frameType) {
    try {
        const response = await fetch(`http://localhost:3000/cartas/criar/${id}/${nome}/${frameType}`);
        if (!response.ok) {
            throw new Error("Erro ao criar carta.");
        }
        return await response.json();
    }
    catch (erro) {
        console.error(erro);
        return null;
    }
}
async function atualizarCarta(id, nome, frameType) {
    try {
        const response = await fetch(`http://localhost:3000/cartas/atualizar/${id}/${nome}/${frameType}`);
        if (!response.ok) {
            throw new Error("Erro ao atualizar carta.");
        }
        return await response.json();
    }
    catch (erro) {
        console.error(erro);
        return null;
    }
}
async function removerCarta(id) {
    try {
        const response = await fetch(`http://localhost:3000/cartas/${id}`, {
            method: "DELETE"
        });
        if (!response.ok) {
            const corpo = await response.text();
            console.error(`Status: ${response.status} - ${corpo}`);
            throw new Error("Erro ao remover carta.");
        }
        return true;
    }
    catch (erro) {
        console.error(erro);
        return false;
    }
}
