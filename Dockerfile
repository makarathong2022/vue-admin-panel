FROM node:14-alpine AS builder

# ARG VITE_API_BASEURL
# ARG VITE_IS_DARK_MODE
# ARG VITE_CLI_PORT
# ARG VITE_SERVER_PORT
# ARG VITE_BASE_API
# ARG VITE_BASE_PATH
# ARG VITE_PRIVATE_KEY_CLIENT_IP

WORKDIR /app
# COPY admin-panel/package.json admin-panel/package-lock.json ./
# RUN npm ci --ignore-scripts

# COPY admin-panel ./
# RUN npm run build
COPY . ./dist

FROM nginx as production-stage
RUN mkdir /app

# ARG VITE_API_BASEURL
# ARG VITE_IS_DARK_MODE
# ARG VITE_CLI_PORT
# ARG VITE_SERVER_PORT
# ARG VITE_BASE_API
# ARG VITE_BASE_PATH

COPY --from=builder /app/dist /app
COPY confs/nginx.conf /etc/nginx/nginx.conf
