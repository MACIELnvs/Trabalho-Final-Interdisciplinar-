import { Monstro } from "./Monstro";
import { Feitico } from "./Feitico";
import { Armadilha } from "./Armadilha";
import {fetchYuGiOh} from "./services/takeData";

//fetchYuGiOh();

const feitico1 = new Feitico(2,"pinrimplimplim", "...", "peidim", [] , "fogo");
const monstro1 = new Monstro(1,"chubaka","...","cabeludinho",[],233,2,3,"monstro");
const Armadilha1 = new Armadilha(3,"corda","...", "forte", [],"");
//console.log(feitico1);

var vetTestes = [monstro1];

monstro1.atualizar("chubaka", "chubakinha atualizado",vetTestes, "nome");
console.log(monstro1);

monstro1.atualizar(233, 999,vetTestes, "ataque");
console.log(monstro1);