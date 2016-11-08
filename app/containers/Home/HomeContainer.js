import React, { Component, PropTypes } from 'react';
import { Home } from '~/components';

export default class HomeContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func, // not required, because not required on iOS
    navigator: PropTypes.object.isRequired
  }
  state = {}
  render() {
    return (
      <Home openDrawer={this.props.openDrawer} />
    );
  }
}
