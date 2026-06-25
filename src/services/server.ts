require('dotenv').config();

const express = require('express');
const pool = require('../config/db');
const productRoutes = require('../routes/routes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rotas
app.use('/products', productRoutes);

// Health check
app.get('/', (req: any, res: any) => res.json({ status: 'ok', message: 'Products API' }));

// Tratamento de erros global
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno no servidor.' });
});

app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  await pool.testConnection();
});