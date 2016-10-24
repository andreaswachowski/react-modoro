import React, { Component } from 'react';
import { PreSplash } from '~/components';
import { View } from 'react-native';
import { ReactModoroNavigator } from '~/containers';

export default class AppContainer extends Component {
  static propTypes = {
    // isAuthenticating: PropTypes.bool.isRequired
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactModoroNavigator />}
      </View>
    );
  }
}
