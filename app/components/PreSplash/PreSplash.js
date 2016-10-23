import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class PreSplash extends Component {
  static propTypes = {}
  state = {}
  render() {
    return (
      <View>
        <Image
          source={require('../../images/logo.png')} />
      </View>
    );
  }
}
