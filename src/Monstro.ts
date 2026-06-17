import { Carta } from "../src/Carta";
import { Colecao } from "../src/Colecao";
export class Monstro extends Carta {

    private _ataque: number;
    private _defesa: number
    private _nivel: number;
    private _raca: string;

    constructor(id: number, nome: string, img: string, descricao: string, vetColecao: Array<Colecao>, ataque: number, defesa: number, nivel: number, raca: string) {
        super(id, nome, img, descricao, vetColecao);

        this._ataque = ataque;
        this._defesa = defesa;
        this._nivel = nivel;
        this._raca = raca;
    }

    toString(): string {
        return `Monstro: ${super.toString()} - Ataque: ${this._ataque} - Defesa: ${this._defesa} - Nível: ${this._nivel} - Raça: ${this._raca}`;
    }

    atendeCriteiro(racaPesquisada: string): boolean {
        if (this._raca == racaPesquisada) {
            return true;
        }
        return false;
    }
}