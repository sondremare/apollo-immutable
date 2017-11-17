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

  componentWillReceiveProps(nextProps) {
    if (nextProps.data && nextProps.data.people) {
      if (this.props.data.people && nextProps.data.people) {
        console.log('this.props.people[0] === nextProps.data.people[0]', this.props.data.people[0] === nextProps.data.people[0]);
        console.log('this.props.people[1] === nextProps.data.people[1]', this.props.data.people[1] === nextProps.data.people[1]);
        console.log('this.props.people[2] === nextProps.data.people[2]', this.props.data.people[2] === nextProps.data.people[2]);
      }
    }
  }

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