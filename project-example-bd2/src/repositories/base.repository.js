const pool = require('../config/db');

class BaseRepository {
  constructor(table, primaryKey = 'id') {
    if (!table) {
      throw new Error('É necessário informar o nome da tabela.');
    }
    this.table = table;
    this.primaryKey = primaryKey;
  }

  async findAll() {
    const [rows] = await pool.query(
      `SELECT * FROM ${this.table} ORDER BY ${this.primaryKey} DESC`
    );
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.query(
      `SELECT * FROM ${this.table} WHERE ${this.primaryKey} = ?`,
      [id]
    );
    return rows[0] || null;
  }

  async create(data) {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const placeholders = columns.map(() => '?').join(', ');

    const [result] = await pool.query(
      `INSERT INTO ${this.table} (${columns.join(', ')}) VALUES (${placeholders})`,
      values
    );
    return this.findById(result.insertId);
  }

  async update(id, data) {
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

  async remove(id) {
    const [result] = await pool.query(
      `DELETE FROM ${this.table} WHERE ${this.primaryKey} = ?`,
      [id]
    );
    return result.affectedRows > 0;
  }
}

module.exports = BaseRepository;
