import pool from '../config/db';

export class BaseRepository<T> {
  protected table: string;
  protected primaryKey: string;

  constructor(table: string, primaryKey: string = 'id') {
    if (!table) {
      throw new Error('É necessário informar o nome da tabela.');
    }
    this.table = table;
    this.primaryKey = primaryKey;
  }

  async findAll(): Promise<T[]> {
    const [rows] = await pool.query<any[]>(
      `SELECT * FROM ${this.table} ORDER BY ${this.primaryKey} DESC`
    );
    return rows as T[];
  }

  async findById(id: number | string): Promise<T | null> {
    const [rows] = await pool.query<any[]>(
      `SELECT * FROM ${this.table} WHERE ${this.primaryKey} = ?`,
      [id]
    );
    return (rows[0] as T) || null;
  }

  async create(data: Partial<T>): Promise<T | null> {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const placeholders = columns.map(() => '?').join(', ');

    const [result] = await pool.query<any>(
      `INSERT INTO ${this.table} (${columns.join(', ')}) VALUES (${placeholders})`,
      values
    );  console.log("✔ INSERT EXECUTADO COM SUCESSO");

    return this.findById(result.insertId);
  }

  async update(id: number | string, data: Partial<T>): Promise<T | null> {
    const columns = Object.keys(data);
    const values = Object.values(data);
    const setClause = columns.map((col) => `${col} = ?`).join(', ');

    const [result] = await pool.query<any>(
      `UPDATE ${this.table} SET ${setClause} WHERE ${this.primaryKey} = ?`,
      [...values, id]
    );

    if (result.affectedRows === 0) return null;
    return this.findById((data as any)[this.primaryKey]);
  }

  async remove(id: number | string): Promise<boolean> {
    const [result] = await pool.query<any>(
      `DELETE FROM ${this.table} WHERE ${this.primaryKey} = ?`,
      [id]
    );

    return result.affectedRows > 0;
  }
}

export default BaseRepository;
