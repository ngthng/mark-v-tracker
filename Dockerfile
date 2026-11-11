# ---------- build stage ----------
FROM node:20-bookworm-slim AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- runtime stage ----------
FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

COPY server/ ./server/
COPY --from=build /app/dist ./dist

EXPOSE 3000
CMD ["node", "server/server.js"]