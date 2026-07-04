import express from "express";
import cors from "cors";
import { testConnection } from "./config/db";
import cartaRoutes from "./routes/carta.routes";
import { controller } from "./controller/controllerInstance";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API EXODIA funcionando com CORS.");
});

app.use("/cartas", cartaRoutes);

const PORT = process.env.PORT || 3000;

async function iniciar() {
  try {
    await testConnection();
    await controller.carregarDoBanco();

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
}

iniciar();