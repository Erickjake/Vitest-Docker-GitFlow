import Database from "better-sqlite3";

// Se for teste, criamos na memória (RAM). Se não, criamos um arquivo app.db.
const dbPath = process.env.NODE_ENV === "test" ? ":memory:" : "app.db";
export const db = new Database(dbPath) as any;

// Cria a tabela assim que o arquivo for importado
db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
  )
`);
