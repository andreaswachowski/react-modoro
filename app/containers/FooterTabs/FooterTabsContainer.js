import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { FooterTabs } from '~/components';

class FooterTabsContainer extends Component {
  static propTypes = {
    activeFooterTab: PropTypes.string.isRequired
  }
  state = {}
  render() {
    return (
      <FooterTabs activeFooterTab={this.props.activeFooterTab} />
    );
  }
}

function mapStateToProps({activeFooterTab}) {
  return {
    activeFooterTab
  };
}

export default connect(
  mapStateToProps
)(FooterTabsContainer);
