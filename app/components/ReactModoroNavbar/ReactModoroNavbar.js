import React, { PropTypes } from 'react';
import NavigationBar from 'react-native-navbar';

ReactModoroNavbar.propTypes = {
  title: PropTypes.string.isRequired,
  rightButton: PropTypes.element,
  leftButton: PropTypes.element
};

export default function ReactModoroNavbar(props) {
  let optionalAttrs = {};
  props.leftButton && (optionalAttrs.leftButton = React.cloneElement(props.leftButton));
  props.rightButton && (optionalAttrs.rightButton = React.cloneElement(props.rightButton));
  return (
    <NavigationBar
      {...optionalAttrs}
      title={{title: props.title}} />
  );
}
