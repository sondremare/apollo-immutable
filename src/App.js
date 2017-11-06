import React, { Component } from 'react';
import List from './List';
import { ApolloProvider } from "react-apollo";
import {View, Text} from 'react-native';
import {client} from './ApolloClient';
import AddButton from './AddButton';

export default class App extends Component<{}> {
  render() {
    return (
      <ApolloProvider client={client}>
       <View style={{flex: 1, alignItems: 'center', paddingTop: 50}}>
         <Text>{'Hi there'}</Text>
         <List />
         <AddButton />
       </View>
      </ApolloProvider>
    );
  }
}