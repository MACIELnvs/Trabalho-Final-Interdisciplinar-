import ColecaoRepository from '../repositories/colecao.repository';
import { Colecao } from '../model/Colecao';


interface ColecaoData {
    idColecao: string;
    nome: string;
    raridade: string;
}


class ColecaoService {
    async list(): Promise<ColecaoData[]> {
        return ColecaoRepository.findAll();
    }

    async getById(id: string): Promise<ColecaoData | null> {
        return ColecaoRepository.findById(id);
    }

    async create(data: ColecaoData): Promise<ColecaoData> {
        console.log("📥 DADOS RECEBIDOS:", data);
        const colecao = new Colecao(data.idColecao,data.nome, data.raridade);
        console.log("📦 OBJETO PARA INSERT:", colecao.toPersistence());
        this.validate(colecao);

        return ColecaoRepository.create(colecao.toPersistence());
    }

    async update(id: string, data: ColecaoData): Promise<ColecaoData> {
        const colecao = new Colecao(data.idColecao,data.nome, data.raridade);
        this.validate(colecao);
        return ColecaoRepository.update(id, colecao.toPersistence());
    }

    async remove(id: string): Promise<boolean> {
        return ColecaoRepository.remove(id);
    }

    private validate(colecao: Colecao): void {
        if (!colecao.isValid()) {
            const error: any = new Error('Os campos id e nome são obrigatórios.');
            error.status = 400;
            throw error;
        }
    }
}

export default new ColecaoService();