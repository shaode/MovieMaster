import './index.less';

import React, { Component } from 'react';
import MovieItem from '../movieItem';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="movies--list">
        <table>
          <thead>
          <tr>
            <th>片名</th>
            <th>类型</th>
            <th>大小</th>
            <th>时长</th>
            <th>路径</th>
          </tr>
          </thead>
          <tbody>
          {movies.items.map((movie) => {
            return (
              <tr key={movie.path}>
                <th>{movie.title}</th>
                <th>{movie.suffix}</th>
                <th>{movie.size}</th>
                <th>{movie.duration}</th>
                <th>{movie.path}</th>
              </tr>
            )
          })}
          </tbody>
        </table>
        {/*{movies.items.map((movie) => {*/}
        {/*return <MovieItem key={movie.id} movie={movie}></MovieItem>*/}
        {/*})}*/}
        {/*{movies.searchResult.map((movie) => {*/}
        {/*return <MovieItem key={movie.id} movie={movie}></MovieItem>*/}
        {/*})}*/}
      </div>
    )
  }
}

export default MovieList;