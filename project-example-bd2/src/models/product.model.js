class Product {
  constructor({ id, name, description, price, stock } = {}) {
    this.id = id;
    this.name = name;
    this.description = description ?? null;
    this.price = price;
    this.stock = stock ?? 0;
  }

  isValid() {
    return Boolean(this.name) && this.price !== undefined;
  }

  toPersistence() {
    return {
      name: this.name,
      description: this.description,
      price: this.price,
      stock: this.stock,
    };
  }
}

module.exports = Product;
