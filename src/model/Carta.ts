import { Colecao } from "./Colecao";
import { IPesquisavel } from "../IPesquisavel";

export abstract class Carta implements IPesquisavel {

    private _id: number;
    private _nome: string;
    private _img: string;
    private _descricao: string;
    private _vetColecao: Array<Colecao> = [];

    constructor(id: number, nome: string, img: string, descricao: string, vetColecao: Array<Colecao>) {

        this._id = id;
        this._nome = nome;
        this._img = img;
        this._descricao = descricao;
        this._vetColecao = vetColecao;
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    get img(): string {
        return this._img;
    }

    get descricao(): string {
        return this._descricao;
    }

    get vetColecao(): Array<Colecao> {
        return this._vetColecao;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    set img(img: string) {
        this._img = img;
    }


    set descricao(descricao: string) {
        this._descricao = descricao;
    }

    set vetColecao(vetColecao: Array<Colecao>) {
        this._vetColecao = vetColecao;
    }

    abstract atendeCriterio(criterio: string): boolean;

   // abstract atualizar(id: number, nomeAtributo: string, novoValor: string | number | Array<Colecao>): boolean;

    toString(): string {
        return `ID: ${this._id} - Nome: ${this._nome} - Imagem: ${this._img} - Descrição: ${this._descricao}`;
    }

}