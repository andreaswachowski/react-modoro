import React from 'react';
import { View, Text } from 'react-native';
import { ReactModoroNavbar } from '~/components';

Home.propTypes = {

};

export default function Home(props) {
  return (
    <View>
      <ReactModoroNavbar title='Home' />
      <Text>
        {'Home'}
      </Text>
    </View>
  );
}
