import { Carta } from "./Carta";

export class CartaController {

    private _cartas: Array<Carta> = [];

    public adicionar(carta: Carta): boolean {
        if (this._cartas.push(carta)) {
            return true;
        }
        else {
            return false;
        }
    }

    public listar(): Array<Carta> {
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

    

//implementar atualizar



    public pesquisarPorCriterio(criterio: string): Array<Carta> {
        let vetorFiltrado = this._cartas.filter(carta => carta.atendeCriterio(criterio));
        return vetorFiltrado;
    }

}