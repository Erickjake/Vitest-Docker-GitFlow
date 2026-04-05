import { describe, it, expect } from "vitest";
import request from "supertest";
import { app } from "./server"; // Importamos apenas a definição do app
import { beforeEach } from "node:test";
import { db } from "./database";

describe("API de Usuários (com SQLite em Memória)", () => {
  beforeEach(() => {
    // Limpa a tabela de usuários antes de cada teste
    db.exec("DELETE FROM usuarios");
  });

  it("deve retornar uma lista vazia quando não houver usuários", async () => {
    const response = await request(app).get("/api/usuarios");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("deve criar um usuário quando for fornecido um nome válido", async () => {
    const response = await request(app)
      .post("/api/usuarios")
      .send({ nome: "Alice" });
    expect(response.status).toBe(201);

    const usuarioNoBanco = db.prepare("SELECT * FROM usuarios").all() as any[];
    expect(usuarioNoBanco).toHaveLength(1);
    expect(usuarioNoBanco[0].nome).toBe("Alice");
  });
});
