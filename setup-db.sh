#!/bin/sh

set -e

set -a
source .env
set +a

echo "================================================"
echo "Setting up local DB"

if [[ $(docker ps -a | grep $DB) ]];
then
    docker start $DB
else
    docker pull mysql:5.7
    docker run -d \
        -e 'MYSQL_DATABASE='"$DB" \
        -e 'MYSQL_USER='"$DB_USERNAME" \
        -e 'MYSQL_PASSWORD='"$DB_PASSWORD" \
        -e 'MYSQL_ROOT_PASSWORD='"$DB_PASSWORD" \
        -e 'TZ=Asia/Singapore' \
        -p 3306:3306 \
        --name $DB \
        mysql:5.7
fi

echo $'local DB is up'
echo "================================================"