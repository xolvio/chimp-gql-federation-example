#!/bin/sh

LIST_ID=$(curl --request POST \
  --url http://localhost:8090/api/lists \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"text": "List one"}' | sed -n 's|.*"id":"\([^"]*\)".*|\1|p')


curl --request POST \
  --url http://localhost:8091/api/items \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"text": "First TODO inside ListOne","listId": "'"$LIST_ID"'"}'

curl --request POST \
  --url http://localhost:8091/api/items \
  --header 'cache-control: no-cache' \
  --header 'content-type: application/json' \
  --data '{"text": "Second TODO inside ListOne","listId": "'"$LIST_ID"'"}'
