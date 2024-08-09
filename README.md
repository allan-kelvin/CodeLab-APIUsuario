# CodeLabAPITemplate

Este é um Template para criação de uma API do Codelab. Utilize este template para criar a sua API NestJS dentro de um docker container

Antes de iniciar o projeto a partir do template, verifique os TODO's a substitia pelos valores corretos

## Development Start

```bash
docker compose up --build
```

## Execução de Testes

Atenção: 
- "attach" ao container para executar os testes
- caso não desejar obeter os relatorios de cobertura, remova o sufixo `:cov` dos comandos a baixo

### Unit
```bash
npm run test:cov
```

### E2E

```bash
npm run test:e2e:cov
```