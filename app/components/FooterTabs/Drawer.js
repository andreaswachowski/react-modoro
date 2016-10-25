import React, { PropTypes } from 'react';
import { View } from 'react-native';
import DrawerHeader from './DrawerHeader';

Drawer.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  onTabSelect: PropTypes.func.isRequired
};

export default function Drawer(props) {
  return (
    <View>
      <DrawerHeader />
    </View>
  );
}
