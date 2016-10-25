import React from 'react';
import { Text, DrawerLayoutAndroid } from 'react-native';

FooterTabs.propTypes = {

};

export default function FooterTabs(props) {
  return (
    <DrawerLayoutAndroid
      drawerWidth={290}
      renderNavigationView={() => (
        <Text>{'THE DRAWER'}</Text>
      )} />
  );
}
