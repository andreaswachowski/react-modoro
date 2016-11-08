import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { PreSplash } from '~/components';
import { View } from 'react-native';
import { ReactModoroNavigator } from '~/containers';
import { firebaseAuth } from '~/config/constants';
import { onAuthChange } from '~/redux/modules/authentication';

class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount() {
    firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChange(user)));
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash />
          : <ReactModoroNavigator isAuthed={this.props.isAuthed} />}
      </View>
    );
  }
}

function mapStateToProps({authentication}) {
  return {
    isAuthenticating: authentication.isAuthenticating,
    isAuthed: authentication.isAuthed
  };
}

export default connect(
  mapStateToProps
)(AppContainer);
