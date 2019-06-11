import React, { Component } from 'react';
import MovieCard from './MovieCard'


export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    }
  }

  
  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }


  render() {
    const id = this.props.match.params.id;
    const movie = this.props.movies.find(movie => `${movie.id}` === id)
    if (!movie) {
      return <div>Loading movie information...</div>;
    }
    return (
      <div className="save-wrapper">
      {
        <MovieCard key={movie.id} movie={movie} addToSavedList={this.props.addToSavedList}/>
      }
    </div>
    );
  }
}
