import { Carta } from "./Carta";
import { Feitico } from "./Feitico";
import { IPesquisavel } from "./IPesquisavel";
import { Monstro } from "./Monstro";

export class CartaController {

    _cartas: Array<Carta> = [];

    public adicionar(carta: Carta): boolean {
        if (this._cartas.push(carta)) {
            return true;
        }
        else {
            return false;
        }
    }

    public listar(): Array<IPesquisavel> {
        return this._cartas.slice();
    }

    public remover(id: number): boolean {
        let indice = this._cartas.findIndex(carta => carta.id == id);

        if (indice != -1) {
            this._cartas.splice(indice, 1);
            return true;
        }
        else {
            return false;
        }

    }
    

    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel> {
        let vetorFiltrado = this._cartas.filter(carta => carta.atendeCriterio(criterio));
        return vetorFiltrado;
    }

}