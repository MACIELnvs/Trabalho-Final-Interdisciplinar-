import { IPesquisavel } from "./IPesquisavel";

export class Colecao implements IPesquisavel {

    private _nome: string;
    private _codigo: string;
    private _raridade: string;

    constructor(nome: string, codigo: string, raridade: string) {
        this._nome = nome;
        this._codigo = codigo;
        this._raridade = raridade;
    }

    get nome(): string {
        return this._nome;
    }

    get codigo(): string {
        return this._codigo;
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
        return `Nome: ${this._nome} - Código: ${this._codigo} - Raridade: ${this._raridade}`;
    }

}