import React from 'react';
import { View, Text, Platform } from 'react-native';
import { ReactModoroNavbar, Gear, Hamburger } from '~/components';

Home.propTypes = {

};

export default function Home(props) {
  return (
    <View>
      <ReactModoroNavbar
        title='Home'
        leftButton={Platform.OS === 'android' ? <Hamburger /> : null}
        rightButton={<Gear onPress={() => console.log('Gear!')}/>} />
      <Text>
        {'Home'}
      </Text>
    </View>
  );
}
