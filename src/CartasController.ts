import { Carta } from "./model/Carta";
import { Feitico } from "./model/Feitico";
import { IPesquisavel } from "./IPesquisavel";
import { Monstro } from "./model/Monstro";
import { Armadilha } from "./model/Armadilha";
import { ColecaoController } from "./ColecaoController";


export class CartaController {

    _vetCartas: Array<Carta> = [];


    public criarCartas(responseJson: any): void {

        for (let i = 0; i < responseJson.data.length; i++) {

            const dados = responseJson.data[i];
            const vetColecao = new ColecaoController().criaColecao(dados);


            if (dados.frameType == "spell") {

                const objFeitico: Feitico = new Feitico(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, vetColecao, dados.race);
                this._vetCartas.push(objFeitico);

            }

            else if (dados.frameType == "trap") {

                const objArmadilha: Armadilha = new Armadilha(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, vetColecao, dados.race);

                this._vetCartas.push(objArmadilha);

            }

            else {

                const objMonstro: Monstro = new Monstro(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, vetColecao, dados.atk, dados.def, dados.level, dados.race
                );

                this._vetCartas.push(objMonstro);
            }

        }

    }


    public adicionar(carta: Carta): void {
        this._vetCartas.push(carta);

    }


    public listar(): Array<Carta> {
        return this._vetCartas.slice();
    }


    public remover(id: number): boolean {
        let indice = this._vetCartas.findIndex(carta => carta.id == id);

        if (indice != -1) {
            this._vetCartas.splice(indice, 1);
            return true;
        }
        else {
            return false;
        }

    }


    public pesquisarPorCriterio(criterio: string): Array<IPesquisavel> {
        let vetorFiltrado = this._vetCartas.filter(carta => carta.atendeCriterio(criterio));
        return vetorFiltrado;
    }

}