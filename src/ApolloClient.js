import { ApolloClient } from "apollo-client";
import {link} from "./graphql/link";
import {getPeopleQuery} from './List';
import { InMemoryCache } from "apollo-cache-inmemory";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export function addUser(id, name) {
  const oldData = client.readQuery({query: getPeopleQuery});

  const newData = Object.assign({}, oldData);
  newData.people.push({
    __typename: "Person",
    id,
    name
  });

  client.writeQuery({
    query: getPeopleQuery,
    data: newData,
  });

  // needed to circumvent the bug in https://github.com/apollographql/apollo-client/issues/2415
  client.queryManager.broadcastQueries()
}