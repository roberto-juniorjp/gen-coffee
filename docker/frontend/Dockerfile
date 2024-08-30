FROM node:22-alpine AS build
RUN npm i -g pnpm nx

WORKDIR /app
COPY package.json ./ 
RUN pnpm install
COPY . . 
RUN nx build frontend

FROM nginx:alpine
COPY --from=build /app/dist/apps/frontend/browser /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]