# CodeLabAPIUsuario

API USUARIO CODELAB
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