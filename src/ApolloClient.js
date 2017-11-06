import { ApolloClient } from "apollo-client";
import {networkInterface} from "./graphql/networkInterface";
import {getPeopleQuery} from './List';

export const client = new ApolloClient({
  networkInterface,
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
}