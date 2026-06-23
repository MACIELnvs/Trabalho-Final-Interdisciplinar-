const service = require('../services/product.service');

// GET /products
async function index(req, res) {
  const products = await service.list();
  return res.json(products);
}

// GET /products/:id
async function show(req, res) {
  const product = await service.getById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado.' });
  }

  return res.json(product);
}

// POST /products
async function store(req, res) {
  try {
    const product = await service.create(req.body);
    return res.status(201).json(product);
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message });
  }
}

// PUT /products/:id
async function update(req, res) {
  try {
    const product = await service.update(req.params.id, req.body);
    if (!product) return res.status(404).json({ message: 'Produto não encontrado.' });
    return res.json(product);
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message });
  }
}

// DELETE /products/:id
async function destroy(req, res) {
  const deleted = await service.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Produto não encontrado.' });
  return res.status(204).send();
}

module.exports = { index, show, store, update, destroy };
