import express from "express";
import { db } from "./database";

export const app = express();
app.use(express.json());

app.get("/api/usuarios", (req, res) => {
  // Busca todos os usuários no banco
  const usuarios = db.prepare("SELECT * FROM usuarios").all();
  res.status(200).json(usuarios);
});

app.post("/api/usuarios", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "O nome é obrigatório" });
  }

  // Insere o usuário no banco
  const info = db.prepare("INSERT INTO usuarios (nome) VALUES (?)").run(nome);

  res.status(201).json({ id: info.lastInsertRowid, nome });
});
