import React from 'react';
import { View, Text, Image } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default function Splash(props) {
  return (
    <View>
      <View>
        <Image source={require('../../images/logo.png')} />
        <Text>{'ReactModoro'}</Text>
      </View>
      <View>
        <LoginButton
          onLoginFinished={() => ({})} />
        <Text>
          {'Don\'t worry. We don\'t post anything to Facebook.'}
        </Text>
      </View>
    </View>
  );
}
