//import { fetchYuGiOh } from "./services/takeData";
//import { testConnection } from "./config/db";

//fetchYuGiOh();
//testConnection();

import dotenv from 'dotenv';

import express, { Request, Response, NextFunction } from 'express';

import pool from './config/db';

import colecaotRoutes from './routes/colecao.routes';


dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middlewares
app.use(express.json());

// Routes
app.use('/colecao', colecaotRoutes);

// Health check
app.get('/', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Products API' });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Erro interno no servidor.' });
});

app.listen(PORT, async () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  

  try {
    if (typeof (pool as any).getConnection === 'function') {
      const connection = await pool.getConnection();
   
      if (typeof (connection as any).release === 'function') {
        (connection as any).release();
      }
      console.log('Conexão com o banco de dados estabelecida.');
    } else {
      console.warn('pool.getConnection não está disponível.');
    }
  } catch (err) {
    console.error('Falha ao conectar ao banco de dados:', err);
  }
});
