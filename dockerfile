# Etape 1 : Construire l'application frontend
FROM node:16.20.1 as frontend
WORKDIR /reby_pepiniere
COPY reby_pepiniere/package.json reby_pepiniere/package-lock.json ./
RUN npm install
COPY frontend .
RUN npm run build
# Etape 2 : Construire l'application backend
FROM node:16.20.1 as backend
WORKDIR /reby_pepiniere/backEnd
COPY reby_pepiniere/package.json reby_pepiniere/package-lock.json ./
RUN npm install
COPY backend .

# Etape 3 : Utiliser Nginx pour servir l'application frontend et backend
FROM nginx:1.21
COPY --from=frontend /app/dist /usr/share/nginx/html
COPY --from=backend /app /usr/share/nginx/html/api

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
