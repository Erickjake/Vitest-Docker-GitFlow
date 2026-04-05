# 1. IMAGEM BASE (Usando slim para compatibilidade com o SQLite)
FROM node:20-slim

# 2. DIRETÓRIO DE TRABALHO
WORKDIR /app

# 3. DEPENDÊNCIAS
COPY package*.json ./
RUN npm install

# 4. COPIANDO O CÓDIGO
COPY . .

# 5. GARANTIA DE QUALIDADE (A MÁGICA ACONTECE AQUI)
# A imagem só será gerada se o Supertest e o Vitest passarem com sucesso!
RUN npm run test

# 6. BUILD DO TYPESCRIPT
RUN npm run build

# 7. ABRINDO A PORTA
# Avisa ao Docker que o container vai se comunicar pela porta 3000
EXPOSE 3000

# 8. LIGANDO O SERVIDOR
CMD ["npm", "start"]