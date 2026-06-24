import { Request, Response } from 'express';
import ColecaoService from '../services/colecao.service';


export async function index(req: Request, res: Response): Promise<Response> {
  const colecoes = await ColecaoService.list();
  return res.json(colecoes);
}


export async function show(req: Request, res: Response): Promise<Response> {
  const { id } = req.params as { id: string };

  if (!id) {
    return res.status(400).json({ message: 'ID não informado.' });
  }

  const colecao = await ColecaoService.getById(id);

  if (!colecao) {
    return res.status(404).json({ message: 'Coleção não encontrada.' });
  }

  return res.json(colecao);
}


export async function store(req: Request, res: Response): Promise<Response> {
  try {
    const colecao = await ColecaoService.create(req.body);
    return res.status(201).json(colecao);
  } catch (err: any) {
    return res.status(err.status || 500).json({ message: err.message });
  }
}


export async function update(req: Request, res: Response): Promise<Response> {
  const { id } = req.params as { id: string };

  if (!id) {
    return res.status(400).json({ message: 'ID não informado.' });
  }

  try {
    const colecao = await ColecaoService.update(id, req.body);
    if (!colecao) return res.status(404).json({ message: 'Coleção não encontrada.' });
    return res.json(colecao);
  } catch (err: any) {
    return res.status(err.status || 500).json({ message: err.message });
  }
}


export async function destroy(req: Request, res: Response): Promise<Response> {
  const { id } = req.params as { id: string };

  if (!id) {
    return res.status(400).json({ message: 'ID não informado.' });
  }

  const deleted = await ColecaoService.remove(id);
  if (!deleted) return res.status(404).json({ message: 'Coleção não encontrada.' });
  return res.status(204).send();
}