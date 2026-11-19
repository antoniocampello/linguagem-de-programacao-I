# Loja de Videogames - Catálogo Web

**Tema escolhido:** Aplicação web para cadastro e listagem de jogos de uma loja de videogames.

## Integrante
- Antonio José Pimentel Campello Neto
- Gabriel Ferraresi Martins de Mello
- João Pedro Ferreira 
- Lucas de Assis Cunha Mantovani

## Como instalar e executar

1. Clone o repositório e acesse a pasta do projeto:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd loja-videogames
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie o banco de dados e a tabela executando o arquivo `script.sql` no MySQL:
   ```bash
   mysql -u root -p < script.sql
   ```

4. Copie o arquivo `.env.example` para `.env` e preencha sua senha do MySQL:
   ```bash
   cp .env.example .env
   ```

5. Inicie o servidor:
   ```bash
   npm start
   ```

6. Acesse no navegador: `http://localhost:3000/itens`
