import { describe, it, expect } from "vitest";
import { gerarSaudacao } from "./app";

describe("gerarSaudacao", () => {
  it("deve retornar 'Olá, mundo!' quando nenhum nome for fornecido", () => {
    const resultado = gerarSaudacao();
    expect(resultado).toBe("Olá, mundo!");
  });

  it("deve retornar 'Olá, [nome]!' quando um nome for fornecido", () => {
    const resultado = gerarSaudacao("João");
    expect(resultado).toBe("Olá, João!");
  });
});
