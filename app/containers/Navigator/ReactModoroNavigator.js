import React, { PropTypes, Component } from 'react';
import { Navigator } from 'react-native';
import { SplashContainer, FooterTabsContainer, SettingsContainer } from '~/containers';

export default class ReactModoroNavigator extends Component {
  static propTypes = {
    isAuthed: PropTypes.bool.isRequired
  }

  renderScene = (route, navigator) => {
    return <SettingsContainer navigator={navigator} />;
    // if (this.props.isAuthed === false) {
    //   return <SplashContainer navigator={navigator} />;
    // }

    // return <FooterTabsContainer navigator={navigator} />;
  }

  configureScene = (route) => {
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        configureScene={this.configureScene} />
    );
  }
}
