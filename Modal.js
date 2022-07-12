import React from 'react';
import api from './api';

import Rating from './Rating';
import Loader from './Loader';

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' });

export default class Modal extends React.Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    api.get(`/movie/${this.props.movieID}`).then(res => this.setState({ loading: false, ...res.data }));
  }

  render() {
    const { poster_path, title, vote_average, release_date, genres, tagline, overview, loading } = this.state;
    return (
      <div className="modal">
        <div className="modal-dialog">
          {loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              <button className="close fas fa-times" onClick={this.props.onClose} />
              <div className="movie-details">
                <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt="" className="movie-poster" />
                <div>
                  <h1 className="movie-title">{title}</h1>
                  <h5 className="release">{release_date && dateFormatter.format(new Date(release_date))}</h5>
                  <div className="genres">
                    {genres && genres.map((item, index) => `${item.name}${index < genres.length - 1 ? ', ' : ''}`)}
                  </div>
                  <Rating rating={vote_average} defaultBase={10} />
                  {tagline && <h5 className="tagline">"{tagline}"</h5>}
                  <h5 className="overview">{overview}</h5>
                </div>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}