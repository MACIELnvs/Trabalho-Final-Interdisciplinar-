const mysql = require("mysql2/promise");

 const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "banco_exodia",
  waitForConnections: true,
  connectionLimit: 10,
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Conectado ao banco de dados com sucesso.");
    connection.release();
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados: " + err.message);
  }
}

module.exports = {
  pool,
  testConnection
};