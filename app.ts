export function gerarSaudacao(nome?: string): string {
  if (!nome) {
    return "Olá, mundo!";
  }
  return `Olá, ${nome}!`;
}

console.log(gerarSaudacao()); // Saída: "Olá, mundo!"
console.log(gerarSaudacao("João")); // Saída: "Olá, João!"
