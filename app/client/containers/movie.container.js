import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieList from '../components/movieList';

class MovieContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const props = this.props;
    return (
      <MovieList movies={props.movies}></MovieList>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies.items,
    isFetching: state.movies.isFetching
  }
}

export default connect(mapStateToProps)(MovieContainer);