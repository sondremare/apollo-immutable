import React, {Component} from 'react';
import {gql, graphql} from 'react-apollo';
import {FlatList, Text, View} from 'react-native';
import ListItem from './ListItem';

class List extends Component<{}> {

  keyExtractor = (item, index) => item.id;

  renderItem = ({item}) => (
      <ListItem item={item}/>
  );

  render() {
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