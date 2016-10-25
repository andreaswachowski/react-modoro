import React, { PropTypes } from 'react';
import { Text, DrawerLayoutAndroid } from 'react-native';
import { HomeContainer, LeaderboardContainer } from '~/containers';

FooterTabs.propTypes = {
  activeFooterTab: PropTypes.string.isRequired,
  navigator: PropTypes.object.isRequired,
  onTabSelect: PropTypes.func.isRequired
};

export default function FooterTabs(props) {
  return (
    <DrawerLayoutAndroid
      drawerWidth={290}
      renderNavigationView={() => (
        <Text>{'THE DRAWER'}</Text>
      )} >
      {props.activeFooterTab === 'home'
        ? <HomeContainer navigator={props.navigator} />
        : <LeaderboardContainer navigator={props.navigator} />}

    </DrawerLayoutAndroid>
  );
}
