import React, { Component } from 'react';
import SidebarContainer from '../containers/sidebar.container';
import MovieContainer from '../containers/movie.container';
import { connect } from 'react-redux';

import { fetchMoviesInfo } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.initData = this.initData.bind(this);
  }

  initData() {
    console.log('init data');
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  componentDidMount() {
    console.log('componentDidMount');
    const { dispatch } = this.props;
    dispatch(fetchMoviesInfo());
  }

  componentWillReceiveProps(nextprops) {
    console.log(nextprops);
  }


  render() {
    return (
      <div className="app">
        <SidebarContainer />
        <div className="main">
          <MovieContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {}
};

export default connect(
  mapStateToProps
)(App);