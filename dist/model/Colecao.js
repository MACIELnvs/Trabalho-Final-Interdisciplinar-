"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colecao = void 0;
class Colecao {
    constructor(nome, id, raridade) {
        this._nome = nome;
        this._id = id;
        this._raridade = raridade;
    }
    get nome() {
        return this._nome;
    }
    get id() {
        return this.id;
    }
    get raridade() {
        return this._raridade;
    }
    set nome(nome) {
        this._nome = nome;
    }
    set raridade(raridade) {
        this._raridade = raridade;
    }
    atendeCriterio(nomePesquisado) {
        if (this._nome == nomePesquisado) {
            return true;
        }
        return false;
    }
    toString() {
        return `Nome Coleção: ${this._nome}\nCódigo: ${this._id}\nRaridade: ${this._raridade}`;
    }
}
exports.Colecao = Colecao;
//# sourceMappingURL=Colecao.js.map