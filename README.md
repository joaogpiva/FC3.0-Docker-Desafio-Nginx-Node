# Full Cycle 3.0 - Desafio Docker + Nginx + Node.js + MySQL

Esse repositório contém uma solução do desafio de conclusão do curso de Docker do Full Cycle 3.0: um arquivo docker-compose que inicia:
- Um servidor MySQL com a tabela `people`;
- Um servidor express com a rota `/` que retorna `<h1>Full Cycle Rocks!</h1>` e uma lista de nomes cadastrados no banco;
- Um proxy reverso usando Nginx que expõe a porta 8080 e redireciona para a porta 300 do app

Basta acessar `localhost:8080` e um nome falso será gerado usando Faker.js e inserido no banco :)