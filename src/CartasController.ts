import { Carta } from "./model/Carta";
import { Feitico } from "./model/Feitico";
import { IPesquisavel } from "./IPesquisavel";
import { Monstro } from "./model/Monstro";
import { Armadilha } from "./model/Armadilha";
import { ColecaoController } from "./ColecaoController";
import { array } from "node:stream/iter";

export class CartaController {


    _vetCartas: Array<Carta> = [];


    public criarCartas(responseJson: any): void {

        if (!responseJson) {
            throw new Error("Erro ao pegar dados da api!");
        }

        for (let i = 0; i < responseJson.data.length; i++) {

            try {
                const dados = responseJson.data[i];

                const carta: Carta = this.construirCarta(dados);

                this._vetCartas.push(carta);
            }
            catch (error: any) {
                console.error("Erro na criação do objeto: " + error.message);
            }
        }
    }

    public construirCarta(dados: any): Carta {

        const vetColecao = new ColecaoController().criaColecao(dados);

        if (dados.frameType == "spell") {

            const objFeitico: Feitico = new Feitico(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, vetColecao, dados.race);
            return objFeitico;
        }
        else if (dados.frameType == "trap") {

            const objArmadilha: Armadilha = new Armadilha(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, vetColecao, dados.race);
            return objArmadilha;
        }
        else {

            const objMonstro: Monstro = new Monstro(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, vetColecao, dados.atk, dados.def, dados.level, dados.race);
            return objMonstro
        }
    }


    public adicionar(carta: Carta): void {
        this._vetCartas.push(carta);

    }


    public listar(): Array<Carta> {
        return this._vetCartas.slice();
    }

    public atualizar(id: number, novaCarta: Carta): void {
        const indice = this._vetCartas.findIndex(obj => obj.id == id);

        if (indice != -1) {
            this._vetCartas[indice] = novaCarta;
        }

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