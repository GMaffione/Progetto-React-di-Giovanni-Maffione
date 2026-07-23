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

# La chiave Spoonacular serve già in fase di build perché Vite la
# "incorpora" nel bundle JS (le variabili VITE_* non esistono più a runtime).
# Viene passata da docker-compose tramite build args, mai hardcoded qui.
ARG VITE_SPOONACULAR_KEY
ENV VITE_SPOONACULAR_KEY=$VITE_SPOONACULAR_KEY

RUN npm run build

# ---------- Fase 2: serve ----------
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
