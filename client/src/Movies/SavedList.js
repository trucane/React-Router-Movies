import React from 'react';
import {NavLink} from 'react-router-dom';

const SavedList = (props) => {
    
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <div>
          <NavLink  key={movie.id}  to={`/movie/${movie.id}`} >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
          <p onClick={() => props.removeFavorite(movie)} >remove</p>
          </div>
        ))}

        <NavLink  className="home-button" to="/">Homes</NavLink>
      </div>
    );
  
}


export default SavedList;
