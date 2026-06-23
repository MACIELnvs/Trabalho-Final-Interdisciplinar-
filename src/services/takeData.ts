import { CartaController } from "../CartasController";


const vetCartas = new CartaController();

export async function fetchYuGiOh() {

    try {

        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');

        const responseJson = await response.json();

        vetCartas.criarCartas(responseJson);
        
        console.log(vetCartas);
        //console.log(vetCartas.pesquisarPorCriterio("Aqua"));
        

    } catch (error: any) {
        console.log("Erro ao pegar dados da API: " + error.message);
    }
}