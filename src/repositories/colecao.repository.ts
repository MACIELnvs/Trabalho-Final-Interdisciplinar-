import { BaseRepository } from './base.repository';

class ColecaoRepository extends BaseRepository<any> {
  constructor() {
    super('Colecoes','idColecao');
  }
}

export default new ColecaoRepository();
