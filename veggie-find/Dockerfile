# Dockerfile — VeggieFind (front end React + Vite)
# Multi-stage build: la prima fase compila l'app, la seconda la serve
# con un server statico leggero (Nginx), invece di portarsi dietro
# tutto Node.js e node_modules nell'immagine finale.

# ---------- Fase 1: build ----------
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# La chiave Spoonacular e il DSN di Sentry servono già in fase di build perché
# Vite li "incorpora" nel bundle JS (le variabili VITE_* non esistono più a runtime).
# Vengono passate da docker-compose/CI tramite build args, mai hardcoded qui.
ARG VITE_SPOONACULAR_KEY
ARG VITE_SENTRY_DSN
ENV VITE_SPOONACULAR_KEY=$VITE_SPOONACULAR_KEY
ENV VITE_SENTRY_DSN=$VITE_SENTRY_DSN

RUN npm run build

# ---------- Fase 2: serve ----------
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]