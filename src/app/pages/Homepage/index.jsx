import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHOW_LOADER_START } from '../../redux/actions/loader';
import Container from './style';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.startLoader();
  }

  render() {
    return <Container>Homepage</Container>;
  }
}

Homepage.propTypes = {};

export default connect(
  state => {
    return {
      loader: state.loader
    };
  },
  dispatch => {
    return {
      startLoader: () => dispatch({ type: SHOW_LOADER_START })
    };
  }
)(Homepage);
