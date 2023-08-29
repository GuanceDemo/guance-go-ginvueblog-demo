#!/usr/bin/env sh

# 将模板 conf 配置文件注入对应环境变量, 生成到指定文件夹

set -eu 

# if [ "$USE_HTTPS" == "true" ]; then
# 	envsubst '${SERVER_NAME} ${BACKEND_HOST} ${BACK_SERVER_PORT} ${FRONT_SERVER_PORT}' < /etc/nginx/conf.d/default.conf.ssl.template > /etc/nginx/conf.d/default.conf
# else
# 	envsubst '${SERVER_NAME} ${BACKEND_HOST} ${BACK_SERVER_PORT} ${FRONT_SERVER_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
# fi

envsubst '${SERVER_NAME} ${BACKEND_HOST} ${BACK_SERVER_PORT} ${FRONT_SERVER_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# rm /etc/nginx/conf.d/default.conf.template
# rm /etc/nginx/conf.d/default.conf.ssl.template
exec "$@"