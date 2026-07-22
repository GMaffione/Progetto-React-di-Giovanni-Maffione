# Dockerfile — Progetto Orizon (backend Express + PostgreSQL)

FROM node:20-alpine

WORKDIR /app

# Copiamo prima solo i file di dipendenze per sfruttare la cache di Docker:
# se non cambiano package.json/package-lock.json, questo layer non viene rifatto
# ad ogni build, velocizzando i rebuild locali.
COPY package*.json ./

RUN npm ci --omit=dev

# Copiamo il resto del codice sorgente
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
