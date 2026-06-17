import { Carta } from "../src/Carta";
import { Colecao } from "../src/Colecao";

export class Feitico extends Carta {

    private _tipoFeitico: string;

    constructor(id: number, nome: string, img: string, descricao: string, vetColecao: Array<Colecao>, tipoFeitico: string) {
        super(id, nome, img, descricao, vetColecao);
        this._tipoFeitico = tipoFeitico;
    }

    get tipoFeitico(): string {
        return this._tipoFeitico;
    }

    set tipoFeitico(tipoFeitico: string) {
        this._tipoFeitico = tipoFeitico;
    }

    toString(): string {
        return `Feitiço: ${super.toString()} - Tipo de Feitiço: ${this._tipoFeitico}`;
    }

    atendeCriteiro(tipoPesquisado: string): boolean {
        if (this._tipoFeitico == tipoPesquisado) {
            return true;
        }
        return false;
    }

}

