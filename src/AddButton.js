import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {addUser} from './ApolloClient';

const AddButton: React.PureComponent =
    () => (
        <TouchableOpacity style={{flex: 1}} onPress={() => addUser(4, 'Jon Doe')}>
          <Text>{'Add another person'}</Text>
        </TouchableOpacity>
    );

export default AddButton;