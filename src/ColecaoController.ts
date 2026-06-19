import { Colecao } from "./model/Colecao";
import { IPesquisavel } from "./IPesquisavel";

export class ColecaoController {
    private _vetColecao: Array<Colecao> = [];


    public criaColecao(dados: any): Array<Colecao> {

        if (!dados.card_sets) {
            return this._vetColecao;
        }

        for (let index = 0; index < dados.card_sets.length; index++) {
            const dadosColecao = dados.card_sets[index];
            const objColecao: Colecao = new Colecao(dadosColecao.set_name, dadosColecao.set_code, dadosColecao.set_rarity);
            this._vetColecao.push(objColecao);
        }

        return this.listar();
    }

    


    public adicionar(novaColecao: Colecao): void {
        this._vetColecao.push(novaColecao);
    }


    public listar(): Array<Colecao> {
        return this._vetColecao.slice();
    }


    public remover(id: string): boolean {
     
        let indice = this._vetColecao.findIndex(obj => obj.id == id);

        if (indice != -1) {
            this._vetColecao.splice(indice, 1);
            return true;
        }
        else {
            return false;
        }

    }


    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel> {
        let vetorFiltrado = this._vetColecao.filter(obj => obj.atendeCriterio(criterio));
        return vetorFiltrado;
    }


    
}