const productRepository = require('../repositories/product.repository');
const Product = require('../models/product.model');

class ProductService {
  async list() {
    return productRepository.findAll();
  }

  async getById(id) {
    return productRepository.findById(id);
  }

  async create(data) {
    const product = new Product(data);
    this.validate(product);
    return productRepository.create(product.toPersistence());
  }

  async update(id, data) {
    const product = new Product(data);
    this.validate(product);
    return productRepository.update(id, product.toPersistence());
  }

  async remove(id) {
    return productRepository.remove(id);
  }

  validate(product) {
    if (!product.isValid()) {
      const error = new Error('Os campos name e price são obrigatórios.');
      error.status = 400;
      throw error;
    }
  }
}

module.exports = new ProductService();
