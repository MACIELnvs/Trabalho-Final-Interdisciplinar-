import { Request, Response } from "express";
import cartaService from "../services/carta.service";

async function index(req: Request, res: Response) {
    const cartas = await cartaService.listar();
    return res.json(cartas.map(c => c.toString()));
}

async function show(req: Request, res: Response) {
    const carta = await cartaService.buscarPorId(Number(req.params.id));
    if (!carta) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }
    return res.json(carta.toString());
}

async function destroy(req: Request, res: Response) {
    const deletada = await cartaService.deletar(Number(req.params.id));

    if (!deletada) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }
    return res.status(204).send();
}

export default { index, show, destroy };