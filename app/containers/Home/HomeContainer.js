import React, { Component, PropTypes } from 'react';
import { Home } from '~/components';

export default class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func, // not required, because not required on iOS
    navigator: PropTypes.object.isRequired
  }
  state = {}
  handleToSettings = () => {
    this.props.navigator.push({
      settings: true
    });
  }
  render() {
    return (
      <Home
        handleToSettings={this.handleToSettings}
        openDrawer={this.props.openDrawer} />
    );
  }
}
