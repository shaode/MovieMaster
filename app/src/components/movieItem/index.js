import './index.less';
import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props)
  }

  maybeRenderAlias() {
    let movie = this.props.movie;
    if (movie.alias) {
      return (
        <div className="movie-card__info-item">
          <span className="movie-card__info-head">
          别名:
          </span>
          <span className="movie-card__info-content">
            {movie.alias}
          </span>
        </div>
      );
    }
  }

  getDirectorList(list) {
    let result = list.map((i) => {
      return i.name;
    });
    return result.join(',');
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card__poster">
          <img className="movie-card__poster-img" src={movie.images.large}/>
        </div>
        <div className="movie-card__info">
          <div className="movie-card__title">{movie.name} ({movie.original_title})</div>
          <div className="movie-card__info-item">
            <span className="movie-card__info-head">
              导演:
            </span>
            <span className="movie-card__info-content">
              {this.getDirectorList(movie.directors || [])}
            </span>
          </div>
          <div className="movie-card__info-item">
            <span className="movie-card__info-head">
            类型:
            </span>
            <span className="movie-card__info-content">
              {movie.genres.join(', ')}
            </span>
          </div>
          {this.maybeRenderAlias()}
          <div className="movie-card__info-item">
            <span className="movie-card__info-head">
            简介:
            </span>
            <span className="movie-card__info-content">
            {/*{movie.synopsis.slice(0, 56) + '...'}*/}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieItem;