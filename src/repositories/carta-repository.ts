const BaseRepository = require('../repositories/base-repository');


export class CartaRepository extends BaseRepository {
  constructor() {
    super('cartas');
  }
}

module.exports = new CartaRepository();
