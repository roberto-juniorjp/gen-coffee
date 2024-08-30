FROM node:22-alpine AS base
RUN npm i -g pnpm nx

WORKDIR /app
COPY package.json ./ 
RUN pnpm install
COPY . . 
RUN nx build backend
 
CMD node dist/apps/backend/main