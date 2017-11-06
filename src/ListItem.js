import React, {Component} from 'react';
import {Text, View} from 'react-native';

const ListItem: React.PureComponent =
    ({item}) => {
    console.log(`Rendering List item with id: ${item.id} and name ${item.name}`);
      return (
          <View>
            <Text>{item.name}</Text>
          </View>
      )
    };

export default ListItem;