FROM node:16-alpine AS builder



WORKDIR /app


COPY . ./dist

FROM nginx as production-stage
RUN mkdir /app


COPY --from=builder /app/dist /app
COPY confs/nginx.conf /etc/nginx/nginx.conf
