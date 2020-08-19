import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "http://localhost:4000/",
  credentials: "include"
});

export default new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});
