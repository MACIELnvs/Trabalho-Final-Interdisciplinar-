"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const carta_routes_1 = __importDefault(require("./routes/carta.routes"));
const cartasController_1 = __importDefault(require("./controller/cartasController"));
exports.controller = new cartasController_1.default();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/cartas", carta_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    await (0, db_1.testConnection)();
    await exports.controller.carregarDoBanco();
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
async function fetchECriar() {
    try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php');
        const responseJson = await response.json();
        exports.controller.criarCartas(responseJson);
    }
    catch (error) {
        console.log("Erro ao buscar dados da API: " + error.message);
    }
}
// ! Chamar fetch criar somente quando quiser inserir no banco!
// await controller.fetchECriar();
//await controller.carregarDoBanco();
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
;
