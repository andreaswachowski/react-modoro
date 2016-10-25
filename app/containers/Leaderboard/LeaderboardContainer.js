import React, { Component, PropTypes } from 'react';
import { Leaderboard } from '~/components';

export default class LeaderboardContainer extends Component {
  static propTypes = {
    openDrawer: PropTypes.func, // not required, because not required on iOS
    navigator: PropTypes.object.isRequired
  }
  state = {}
  render() {
    return (
      <Leaderboard />
    );
  }
}
