
# 📦 Comandos Úteis do Prisma

Lista de comandos comuns e úteis para desenvolvimento com Prisma ORM.

---

## 🛠️ Instalação

```bash
npm install prisma --save-dev
npx prisma init
```

---

## 🧪 Testar Conexão com o Banco

```bash
npx prisma db pull
```
> Puxa a estrutura atual do banco de dados para o `schema.prisma`.

---

## 📤 Enviar modelos do Prisma para o banco (cria as tabelas)

```bash
npx prisma db push
```
> Aplica o schema Prisma no banco de dados (útil em ambiente de dev).

---

## 🧬 Gerar o Prisma Client

```bash
npx prisma generate
```
> Gera o cliente para uso em código (`import { prisma } from '@/lib/prisma'`).

---

## 🎯 Executar Migrações (produz histórico de mudanças)

```bash
npx prisma migrate dev --name nome-da-migracao
```

```bash
npx prisma migrate deploy
```
> Aplica migrações em produção (usado junto com CI/CD).

---

## 🔍 Ver Estrutura do Banco (após pull)

```bash
cat prisma/schema.prisma
```
> Mostra as tabelas e campos detectados no banco de dados.

---

## 🧼 Resetar o banco (⚠️ apaga tudo)

```bash
npx prisma migrate reset
```
> Apaga o banco e recria tudo a partir das migrações existentes.

---

## 👁️ Interface visual: Prisma Studio

```bash
npx prisma studio
```
> Abre uma interface visual para visualizar e editar registros do banco de dados.

---

## 🔍 Verificar se há problemas no schema

```bash
npx prisma validate
```

---

## 🧹 Remover o Prisma Client gerado (limpeza)

```bash
rm -rf node_modules/.prisma
```

---

## 📦 Criar uma nova migração manualmente

```bash
npx prisma migrate dev --name init
```

---

## 🧾 Logs de debug

```bash
DEBUG="*"
```

Use em conjunto com um comando, ex:

```bash
DEBUG="*" npx prisma db pull
```

---

## 💡 Dica: Arquivo `.env`

Sempre coloque sua `DATABASE_URL` no `.env`:

```env
DATABASE_URL="mysql://usuario:senha@host:3306/banco"
```

---

## 🌐 Documentação Oficial

- https://www.prisma.io/docs
- https://www.prisma.io/reference/api-reference/command-reference
