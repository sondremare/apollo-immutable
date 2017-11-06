import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {FlatList, Text, View} from 'react-native';
import ListItem from './ListItem';
import gql from "graphql-tag";

class List extends Component<{}> {

  keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => (
      <ListItem item={item}/>
  );

  render() {
    console.log('List render', this.props.data.people);
    const {data: {loading, people}} = this.props;
    if (loading) {
      return (
          <View><Text>{'Loading...'}</Text></View>
      )
    }
    return (
        <FlatList
            data={people}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
        />
    );
  }
}

export const getPeopleQuery = gql`
    query getPeople {
        people {
            id
            name
        }
    }
`;

export default graphql(getPeopleQuery)(List);