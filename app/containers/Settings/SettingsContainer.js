import React, { PropTypes, Component } from 'react';
import { View, Text } from 'react-native';
import { Settings } from '~/components';

export default class SettingsContainer extends Component {
  static propTypes = {}
  state = {}
  render() {
    return (
      <Settings />
    );
  }
}
