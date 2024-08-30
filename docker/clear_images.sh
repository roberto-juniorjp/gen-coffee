#!/bin/sh

if [ "$(docker ps -q)" ]; then
    docker stop $(docker ps -q)
fi
if [ "$(docker ps -a -q)" ]; then
    docker rm $(docker ps -a -q)
fi
if [ "$(docker images -q)" ]; then
    docker rmi $(docker images -q) --force
fi
docker volume prune -f
docker network prune -f
docker builder prune -f
docker system prune -a -f --volumes