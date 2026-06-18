import { IPesquisavel } from "./IPesquisavel";

export class Colecao implements IPesquisavel {

    private _id: string;
    private _nome: string;
    private _raridade: string;

    constructor(nome: string, codigo: string, raridade: string) {
        this._nome = nome;
        this._id = codigo;
        this._raridade = raridade;
    }

    get nome(): string {
        return this._nome;
    }

    get codigo(): string {
        return this._id;
    }

    get raridade(): string {
        return this._raridade;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    set raridade(raridade: string) {
        this._raridade = raridade;
    }

    atendeCriterio(nomePesquisado: string): boolean {
        if (this._nome == nomePesquisado) {
            return true;
        }
        return false;
    }

    toString(): string {
        return `Nome: ${this._nome} - Código: ${this._id} - Raridade: ${this._raridade}`;
    }

}