#!/bin/sh

set -e

set -a
source .env
set +a

CONTAINER_NAME=$DB

echo "================================================"
echo "Setting up local DB"

if [[ $(docker ps -a | grep $CONTAINER_NAME) ]];
then
    docker start $CONTAINER_NAME
else
    docker pull mysql:5.7
    docker run -d \
        -e 'MYSQL_DATABASE='"$CONTAINER_NAME" \
        -e 'MYSQL_USER='"$DB_USERNAME" \
        -e 'MYSQL_PASSWORD='"$DB_PASSWORD" \
        -e 'MYSQL_ROOT_PASSWORD='"$DB_PASSWORD" \
        -e 'TZ=Asia/Singapore' \
        -p 3307:3307 \
        --name $CONTAINER_NAME \
        mysql:5.7
fi

echo $'local DB is up'
echo "================================================"