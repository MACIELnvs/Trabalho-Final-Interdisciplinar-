import { Carta } from "./Carta";
import { Colecao } from "./Colecao";

export class Monstro extends Carta{

    private _ataque: number;
    private _defesa: number
    private _nivel: number;
    private _raca: string;

    constructor(id: number, nome: string, img: string, descricao: string, vetColecao: Array<Colecao>, ataque: number, defesa: number, nivel: number, raca: string) {
        super(id, nome, img, descricao, vetColecao);

        this._ataque = ataque;
        this._defesa = defesa;
        this._nivel = nivel;
        this._raca = raca;
    }

    public get ataque(): number {
        return this._ataque;
    }


    public get defesa(): number {
        return this._defesa;
    }


    public get nivel(): number {
        return this._nivel;
    }


    public get raca(): string {
        return this._raca;
    }


    public set ataque(novoAtaque: number) {
        if (novoAtaque >= 0) {
            this._ataque = novoAtaque;
        }
        else {
            console.log("O ataque não pode ser negativo!");
        }
    }

    public set defesa(novaDefesa: number) {
        if (novaDefesa >= 0) {
            this._defesa = novaDefesa;
        }
        else {
            console.log("A defesa não pode ser negativa!");
        }
    }

    public set nivel(novoNivel: number) {
        if (novoNivel >= 0) {
            this._nivel = novoNivel;
        }
        else {
            console.log("O Nivel não pode ser negativo!");
        }
    }

    public set raca(novaRaca: string) {
        if (novaRaca.length > 0) {
            this._raca = novaRaca;
        }
        else {
            console.log("A Raça não pode ser uma string vazia!");
        }
    }

    atendeCriterio(racaPesquisada: string): boolean {
        if (this._raca == racaPesquisada) {
            return true;
        }
        return false;
    }


    toString(): string {
        return `Monstro: ${super.toString()} - Ataque: ${this._ataque} - Defesa: ${this._defesa} - Nível: ${this._nivel} - Raça: ${this._raca}`;
    }

    atualizar<atributo extends keyof Monstro>(
        old: Monstro[atributo],
        newW: Monstro[atributo],
        array: Array<Monstro>,
        atributoAtualizado: atributo): boolean {

        let flag = false;

        for (let index = 0; index < array.length; index++) {
            const carta = array[index]!; //! para o typescript confiar no meu codigo, pois pra ele carta pode ser undefined, mesmo que percorra so ate o final no vetor

            if (carta[atributoAtualizado] === old) {
                carta[atributoAtualizado] = newW
                flag = true
            }
        }
        return flag;
    }


};


    // =========================== FORMA CORRETA DE ATUALIZAR NO BANCO DE DADOS ===========================
/* 
    atualizar<atributo extends keyof Monstro>(
        objeto: Monstro): boolean {
        console

        //buscar do banco
        //Monstro monstroBd = buscarPorId(newW.id);

        if(newW._ataque != monstroBd._ataque) {
            monstroBd._ataque = newW._ataque;
        }

        //fazer para os outros campos

        //Chamar o metodo para salva o novo monstroBd
        salvar(monstroBd);
    }
} */