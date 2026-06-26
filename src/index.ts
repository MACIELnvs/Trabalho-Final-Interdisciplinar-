import express from "express";
import { testConnection } from "./config/db";
import cartaRoutes from "./routes/carta.routes";
import CartaController from "./controller/cartasController";
import { Monstro } from "./model/Monstro";


const controller = new CartaController();

const app = express();
app.use(express.json());
app.use("/cartas", cartaRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, async () => {
  await testConnection();
  console.log(`Servidor rodando em http://localhost:${PORT}`);


async function fetchECriar(): Promise<void> {

  try {
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
    const responseJson = await response.json();

    controller.criarCartas(responseJson);

  }
  catch (error: any) {
    console.log("Erro ao buscar dados da API: " + error.message);
  }
}


// ! Chamar fetch criar somente quando quiser inserir no banco!
  // await controller.fetchECriar();


 await controller.carregarDoBanco();
 console.log(controller.listar());


  // ------------------------------------------ Testes ---------------------------------------------------------------------

  /*
 1. Adicionar
  await controller.carregarDoBanco();
  const monstro = new Monstro(1,"chubaka","....","cabeludo", [], 1,3,12,"srd");
  controller.adicionar(monstro);

  const monstroIdRepetido = new Monstro(1003028,"chubaka","....","cabeludo", [], 1,3,12,"srd");
  controller.adicionar(monstro);

2. Atualizar
  await controller.carregarDoBanco();
  const monstro = new Monstro(1,"chubaka","....","cabeludo", [], 1,3,12,"srd");
  controller.adicionar(monstro);
  const monstro2 = new Monstro(1,"testeAtualizar","....","cabeludo", [], 1,3,12,"srd");
  controller.atualizar(1,monstro2);


3. Remover
  controller.remover(1);



5. Metodo de Ipesquisavel que pesquisa cartas que atendem determinado criterio
  console.log(controller.pesquisarPorCriterio("Wyrm"));


6. Metodo Ipesquisavel que pesquisa cartas que estao em determinada colecao
  const cartasDaColecao = controller.pesquisarCartasPorColecao("Battles of Legend: Relentless Revenge");
  console.log(cartasDaColecao);

  */


});