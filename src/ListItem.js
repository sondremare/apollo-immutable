import React from 'react';
import {Text, View} from 'react-native';
import {
  pure,
  compose,
  setDisplayName,
} from 'recompose'

const ListItem =
    ({item}) => {
      console.log(`Rendering List item with id: ${item.id} and name ${item.name}`);
      return (
          <View>
            <Text>{item.name}</Text>
          </View>
      )
    };

export default compose(pure)(ListItem);