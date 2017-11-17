import { ApolloClient } from "apollo-client";
import {link} from "./graphql/link";
import {getPeopleQuery} from './List';
import { InMemoryCache } from "apollo-cache-inmemory";
import update from 'immutability-helper';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export function addUser(id, name) {
  const oldData = client.readQuery({query: getPeopleQuery});

  const newData = update(
      oldData,
      {
        people: {
          $push: [{
            __typename: "Person",
            id,
            name
          }],
        },
      },
  );

  client.writeQuery({
    query: getPeopleQuery,
    data: newData,
  });
}