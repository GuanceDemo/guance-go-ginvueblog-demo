docker ps -a |grep gvb|awk '{print$1}'|xargs docker stop
docker ps -a |grep gvb|awk '{print$1}'|xargs docker rm 

docker images  |grep gvb|awk '{print$1}'|xargs docker rmi 
