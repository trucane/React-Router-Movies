import React from 'react';
import {Link} from 'react-router-dom';

 const MovieCard =  (props) => {
   const { title, director, metascore, stars } = props.movie;

   const saveMovie = (e, movie) => {
    e.preventDefault();
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }
    return (

      
      <div className="movie-card">
        <h2><Link to={`/movie/${props.movie.id}`}>{title}</Link></h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        <div className="save-button" onClick={(e) => saveMovie(e, props.movie )}>Save</div>
      </div>
    );
  
};

export default MovieCard;
