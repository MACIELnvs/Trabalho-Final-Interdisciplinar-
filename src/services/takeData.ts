import { Armadilha } from "../Armadilha";
import { CartaController } from "../CartasController";
import { Feitico } from "../Feitico";
import { Monstro } from "../Monstro";


const vetCartas = new CartaController();

export async function fetchYuGiOh() {
    try {

        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const responseJson = await response.json();

        for (let i = 0; i < responseJson.data.length; i++) {

            const dados = responseJson.data[i];

            if (dados.frameType == "spell") {

                const objFeitico = new Feitico(
                    dados.id,
                    dados.name,
                    dados.image_url,
                    dados.desc,
                    dados.card_sets,
                    dados.race
                );


            }
            else if (dados.frameType == "trap") {
                const objArmadilha = new Armadilha(
                    dados.id,
                    dados.name,
                    dados.image_url,
                    dados.desc,
                    dados.card_sets,
                    dados.race
                );
                console.log(objArmadilha.img);
            }
            
            else {
                const objMonstro = new Monstro(
                    dados.id,
                    dados.name,
                    dados.image_url,
                    dados.desc,
                    dados.card_sets,
                    dados.atk,
                    dados.def,
                    dados.level,
                    dados.race
                );
            }
        }


    } catch (error) {

    }



}