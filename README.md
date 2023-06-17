## API testável com Node.JS 

Escrevendo testes simples para uma aplicação que realiza agendamento de clientes.

Uma aplicação que segue bons padrões de projeto e arquitetura deve ser fácil de ser testada.

Tecnologias utilizadas: JavaScript com a plataforma Node.JS, Typescript, ESLint, Vitest. 

Inicialização do projeto com Node: ```npm init -y```

Para analisar e detectar problemas no padrão do código foi utilizado ESLint: ```npm i eslint -D``` e ```npm init @eslint/config```

Criação de entidades utilizando orientação a objetos, com padrão de classes.

Utilizado Vitest como ferramenta de testes: ```npm i vitest -D```

Criado script de teste no package.json: 
```"scripts": {
    "test": "vitest"
  },```
Para rodar: ```npm run test```