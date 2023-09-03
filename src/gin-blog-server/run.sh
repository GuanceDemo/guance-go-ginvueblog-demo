#!/bin/bash
export  TZ=Asia/Shanghai
export  SERVER_BACKPORT=:8765 # 后台服务端口
export  SERVER_FRONTPORT=:5678 # 前台服务端口
export  MYSQL_HOST=172.12.0.3
export  MYSQL_PORT=3306
export  MYSQL_DBNAME=gvb # 默认 gvb, 改动需要修改 gvb-mysql 镜像
export  MYSQL_USERNAME=root
export  MYSQL_PASSWORD=123456
export  REDIS_ADDR=172.12.0.2:6379
export  REDIS_PASSWORD=123456
export  OTEL_DB_SERVICE_NAME=Gin-Vue-Blog-MySQL
export  OTEL_SERVICE_ADMIN_NAME=Gin-Vue-Blog-Admin
export  OTEL_SERVICE_FRONT_NAME=Gin-Vue-Blog-Front
export  OTEL_REDIS_SERVICE_NAME=Gin-Vue-Blog-Redis
export SERVICE_VERSION=v1.0
export OTEL_EXPORTER_OTLP_ENDPOINT=localhost:9529
export OTEL_EXPORTER_OTLP_URL_PATH=/otel/v1/traces
export INSECURE_MODE=false

rm -rf ./server
go mod tidy 
go build -o server .


chmod +x ./server
./server -c config/config.docker.toml 