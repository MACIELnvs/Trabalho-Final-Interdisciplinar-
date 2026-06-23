const BaseRepository = require('./base.repository');

class ProductRepository extends BaseRepository {
  constructor() {
    super('products');
  }
}

module.exports = new ProductRepository();
