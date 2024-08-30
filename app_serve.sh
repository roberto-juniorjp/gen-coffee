#!/bin/bash

cleanup() {
  fuser -k 3000/tcp
  fuser -k 4200/tcp
  docker stop gen-coffee-db-1 gen-coffee-adminer-1 2>/dev/null
  exit
}

trap cleanup INT TERM

docker start gen-coffee-db-1 gen-coffee-adminer-1
npx nx serve backend &
npx nx serve frontend &

while read -r -n 1 -s key; do
  if [ "$key" = "q" ]; then
    cleanup
  fi
done