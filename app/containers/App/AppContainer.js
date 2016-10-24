import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { PreSplash } from '~/components';
import { View } from 'react-native';
import { ReactModoroNavigator } from '~/containers';

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactModoroNavigator />}
      </View>
    );
  }
}

function mapStateToProps({authentication}) {
  return {
    isAuthenticating: authentication.isAuthenticating
  };
}

export default connect(
  mapStateToProps
)(AppContainer);
