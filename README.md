<h1>Bridge | Test Backend </h1>

### Descrição:
O desafio envolve a implementação de funcionalidades web tanto no frontend quanto
no backend. Você pode utilizar as linguagens, ferramentas e frameworks que achar mais
adequados, porém sugerimos o uso de React ou Angular para a implementação de seu
frontend e Java ou Kotlin com Springboot para o backend.

### Tasks:
[X] - Permitir que o usuário insira um número
inteiro k

[X] - Calcular o número de inteiros positivos primos n MENORES que k;

[X] - Listar todos os resultados e com tempo estimado de execução;

[X] - Não deve ser possível calcular números negativos;

[X] - Testar as rotas;

### Rodando a API localmente:

#### Clone o projeto :  `use git clone `
#### Rode o comando no terminal :  `yarn ` ou `npm install `
#### Crie um arquivo .env na raiz do projeto :  `copiar as variáveis ambiente no arquivo .env-exemple`
#### Rode o comando no terminal :  `yarn dev` ou `npm run dev `

### Rodando a os Teste:
#### Rode o comando no terminal :  `yarn test` ou `npm run test ` ou  `yarn test:watch` ou `npm run test:watch `


 ### Rodar o build: 
 #### Rode o comando no terminal : `yarn build`  ou  `npm run buld`

 ### Testando as Rotas: `Insominia` ou `postman`

 [GET]http://localhost:3333/

 ```bash
[
	{
		"id": "90a33d65-c27d-43b4-b23d-5ddd36adee97",
		"number": 11,
		"execution_time": "0.08",
		"prime_list": [
			2,
			3,
			5,
			7,
			11
		]
	}
]
```

 [POST]http://localhost:3333/results

 ```bash
{
	"number": 11
}
```


## 🛠 Tecnologias
- <strong>Nodejs</strong>
- <strong>Typescript</strong>
- <strong>Fastify</strong>
- <strong>Prisma</strong>
- <strong>Supabase</strong>
- <strong>Vitest</strong>
- <strong>Zod</strong>


