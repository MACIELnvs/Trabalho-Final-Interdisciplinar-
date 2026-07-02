import { BaseRepository } from "./base-repository";


export class CartaRepository extends BaseRepository {
  constructor() {
    super('Cartas', 'idCarta');
  }
}

module.exports = new CartaRepository();
