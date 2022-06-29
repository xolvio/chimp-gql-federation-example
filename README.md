# Chimp Gql Federation Example
Please read docs at https://chimpjs.com to learn about this Repository.

## Structure

This repository consists of 6 independent packages:

- `graphql-gateway` TypeScript thin layer powered by [Apollo Gateway](https://www.apollographql.com/docs/apollo-server/federation/gateway/)
- `graphql-todo-items` TypeScript Federated Graph responsible for Todo Items (and extending Lists)
- `graphql-todo-lists` TypeScript Federated Graph responsible for Todo Lists
- `microservice-todo-items` Kotlin Spring Microservice responsible for operations related to Todo Items
- `microservice-todo-lists` Kotlin Spring Microservice responsible for operations related to Todo Lists
- `web` React Frontend - a playground frontend that works with this architecture even though it was written over multiple years for a monolithic GraphQL / MongoDB server - but since the GraphQL Schema matches our Federated, it works just fine.

## Setup

`npm install`

Make sure you have docker running and Java installed. Then start all the projects including a dockerized instance of mongodb.

If you have problems with Java take a look at this StackOverflow reply: https://stackoverflow.com/a/65562670

Docker you can install from here: https://docs.docker.com/desktop/mac/install/

Node >= 16.15.1 < 17

`npm start`
