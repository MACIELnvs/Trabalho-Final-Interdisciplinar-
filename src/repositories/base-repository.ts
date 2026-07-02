//const pool = require('../config/db');

export class BaseRepository {

  private table:string;
  private primaryKey:string;

  constructor(table:string, primaryKey:string = 'id') {
    if (!table) {
      throw new Error('É necessário informar o nome da tabela.');
    }
    this.table = table;
    this.primaryKey = primaryKey;
  }

  async listarTodas() {
    const [rows] = await pool.query(
      `SELECT * FROM ${this.table} ORDER BY ${this.primaryKey} DESC`
    );
    return rows;
  }

  async findById(id:number) {
    const [rows] = await pool.query(
      `SELECT * FROM ${this.table} WHERE ${this.primaryKey} = ?`,
      [id]
    );
    return rows[0] || null;
  }

  async create(data:string) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const placeholders = columns.map(() => '?').join(', ');

    const [result] = await pool.query(
      `INSERT INTO ${this.table} (${columns.join(', ')}) VALUES (${placeholders})`,
      values
    );
    return this.findById(result.insertId);
  }

  async update(id:number, data:string) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const setClause = columns.map((col) => `${col} = ?`).join(', ');

    const [result] = await pool.query(
      `UPDATE ${this.table} SET ${setClause} WHERE ${this.primaryKey} = ?`,
      [...values, id]
    );
    if (result.affectedRows === 0) return null;
    return this.findById(id);
  }

  async remove(id:number) {
    const [result] = await pool.query(
      `DELETE FROM ${this.table} WHERE ${this.primaryKey} = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = BaseRepository;



// =============================


