import React from 'react';
import MovieCard from './MovieCard';


const MovieList =(props) => {

    return (
      <div className="movie-list">
        {props.movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} addToSavedList={props.addToSavedList}/>
        ))}
      </div>
    );
}

export default MovieList;