import { Carta } from "./model/Carta";
import { Feitico } from "./model/Feitico";
import { IPesquisavel } from "./model/IPesquisavel";
import { Monstro } from "./model/Monstro";
import { Armadilha } from "./model/Armadilha";
import { Colecao } from "./model/Colecao";

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

        const colecao: Colecao[] = [];

        if (dados.card_sets) {
            for (let i = 0; i < dados.card_sets.length; i++) {

                const c = dados.card_sets[i];

                const objColecao = new Colecao(
                    c.set_name,
                    c.set_code,
                    c.set_rarity
                );

                colecao.push(objColecao);
            }
        }

        if (dados.frameType == "spell") {

            const objFeitico: Feitico = new Feitico(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, colecao, dados.race);
            return objFeitico;
        }
        else if (dados.frameType == "trap") {

            const objArmadilha: Armadilha = new Armadilha(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, colecao, dados.race);
            return objArmadilha;
        }
        else {

            const objMonstro: Monstro = new Monstro(dados.id, dados.name, dados.card_images[0].image_url, dados.desc, colecao, dados.atk, dados.def, dados.level, dados.race);
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


    public pesquisarCartasPorColecao(criterio: string): Array<IPesquisavel> {
        return this._vetCartas.filter(carta => {

            for (let i = 0; i < carta.vetColecao.length; i++) {

                if (carta.vetColecao[i]?.atendeCriterio(criterio)) {
                    return true;
                }

            }
            return false;
        });
    }

}
