import React, { PropTypes } from 'react';
import NavigationBar from 'react-native-navbar';

ReactModoroNavbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default function ReactModoroNavbar(props) {
  return (
    <NavigationBar title={{title: props.title}}/>
  );
}
