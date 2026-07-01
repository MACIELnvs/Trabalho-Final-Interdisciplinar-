import { Request, Response } from "express";
//import cartaService from "../services/carta.service";
import { controller } from "../index";

async function mostrarCartas(req: Request, res: Response) {
    
    return res.json(controller.listar().map(c => c.toString()));
}



async function buscarCartaIndice(req: Request, res: Response) {
    const carta = controller.listar().find(c => c.id === Number(req.params.id));

    if (!carta) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }

    return res.json(carta.toString());
}


async function remover(req: Request, res: Response) {
    const removida = controller.remover(Number(req.params.id));

    if (!removida) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }
   // await cartaService.deletar(Number(req.params.id)); 
    return res.status(204).send();
}



async function criar(req: Request, res: Response) {

    const carta = controller.construirCarta(req.body);
    const adicionada = controller.adicionar(carta);

    if (!adicionada) {
        return res.status(409).json({ message: "Carta com ID repetido." });
    }

    //await cartaService.salvar(carta); 
    return res.status(201).json(carta.toString());
}



async function atualizar(req: Request, res: Response) {

    const carta = controller.construirCarta(req.body);

    const atualizada = controller.atualizar(Number(req.params.id), carta);

    if (!atualizada) {
        return res.status(404).json({ message: "Carta não encontrada." });
    }
   // await cartaService.atualizar(Number(req.params.id), carta); 
    return res.json(carta.toString());
}



async function pesquisar(req: Request, res: Response) {

    const criterio = req.params.criterio as string;
    if (!criterio) {
        return res.status(400).json({ message: "Critério não informado." });
    }
    const resultado = controller.pesquisarPorCriterio(criterio);

    return res.json(resultado.map(c => c.toString()));
}



async function pesquisarCartaPorColecao(req: Request, res: Response) {

    const criterio = req.params.criterio as string;

    if (!criterio) {
        return res.status(400).json({ message: "Critério não informado." });
    }

    const resultado = controller.pesquisarCartasPorColecao(criterio);
    return res.json(resultado.map(c => c.toString()));
}


export default { mostrarCartas, buscarCartaIndice, criar, atualizar, remover, pesquisar, pesquisarCartaPorColecao};