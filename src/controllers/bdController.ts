import { ServiceCarta } from "../services/service-carta";
import { CartaController } from "./CartasController";

export abstract class CartaDBController {


  static async listarTodas(resolve: any, reject: any) {

    const cartas = await ServiceCarta.listarTodas();

    if (!cartas) {
      return resolve.status(404).json({ message: 'Carta não encontrada.' });
    }
    return resolve.json(cartas);
  }


  static async criarCarta(req: any, res: any) {
  const dados = req.body;

  const controller = new CartaController();
  const carta = controller.construirCarta(dados);

  const resultado = await ServiceCarta.criarCarta(carta); 

  return res.json(resultado);
}


  static async salvarBD (resolve:any, reject:any){



  }

} 