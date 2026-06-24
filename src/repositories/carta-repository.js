const BaseRepository = require('./base.repository');

class ProductRepository extends BaseRepository {
  constructor() {
    super('cartas');
  }
}

module.exports = new ProductRepository();
