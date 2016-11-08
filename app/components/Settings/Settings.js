import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import { ReactModoroNavbar, Close } from '~/components';

Settings.propTypes = {
  onBack: PropTypes.func.isRequired
};

export default function Settings(props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Settings'
        leftButton={<Close onPress={props.onBack}/>} />
      <Text>
        {'Settings'}
      </Text>
    </View>
  );
}
