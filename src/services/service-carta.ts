import { CartaDBController } from "../controllers/bdController";
import { Carta } from "../models/Carta";
import { CartaRepository } from "../repositories/carta-repository";


export abstract class ServiceCarta {


  static async listarTodas() {
    return CartaRepository.listarTodas();
  }


  static async salvarBD() {
    return CartaRepository.salvarBD();
  }

  static async criarCarta(carta: any) {
    return await CartaRepository.criar(carta);
  }
}
//module.exports = new ServiceCarta();