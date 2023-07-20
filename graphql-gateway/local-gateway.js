const { ApolloServer } = require("apollo-server");
const { ApolloGateway, RemoteGraphQLDataSource } = require("@apollo/gateway");

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    Object.entries(context.headers || {}).forEach(([key, value]) => {
      request.http.headers.set(key, value);
    });
  }
}

const gateway = new ApolloGateway({
  serviceList: [
    { name: "todoItems", url: "http://localhost:9081/graphql" },
    { name: "todoLists", url: "http://localhost:4002/graphql" },
  ],
  buildService({ name, url }) {
    return new AuthenticatedDataSource({ url });
  },
});

(async () => {
  const { schema, executor } = await gateway.load();

  const whitelist = [
    "http://localhost:3000",
    "http://localhost:4000",
    "http://xolv.io",
    "https://xolv.io",
  ];

  const corsOptions = {
    origin(origin, callback) {
      const originIsWhitelisted = whitelist.indexOf(origin) !== -1 || !origin;
      callback(null, originIsWhitelisted);
    },
    credentials: true,
  };

  const server = new ApolloServer({
    schema,
    executor,
    cors: corsOptions,
    context: ({ req }) => {
      return { headers: req.headers };
    },
  });

  server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
