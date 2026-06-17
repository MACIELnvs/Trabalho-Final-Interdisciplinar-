import { Carta } from "../src/Carta";
import { Colecao } from "../src/Colecao";

export class Armadilha extends Carta {

    private _tipoArmadilha: string;

    constructor(id: number, nome: string, img: string, descricao: string, vetColecao: Array<Colecao>, tipoArmadilha: string) {
        super(id, nome, img, descricao, vetColecao);

        this._tipoArmadilha = tipoArmadilha;
    }

    get tipoArmadilha(): string {
        return this._tipoArmadilha;
    }

    set tipoArmadilha(tipoArmadilha: string) {
        this._tipoArmadilha = tipoArmadilha;
    }

    toString(): string {
        return `Armadilha: ${super.toString()} - Tipo de Armadilha: ${this._tipoArmadilha}`;
    }

    atendeCriteiro(tipoPesquisado: string): boolean {
        if (this._tipoArmadilha == tipoPesquisado) {
            return true;
        }
        return false;
    }
}