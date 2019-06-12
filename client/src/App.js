import React, { Component } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import {Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies:[],
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;

    if(savedList.includes(movie)){

    }else{

      savedList.push(movie);
      this.setState({ savedList });
    }
  };

  removeFavorite = movie =>{
   const favs = this.state.savedList.filter( res => res.id !== movie.id)
   this.setState({
    savedList:favs
   })
   
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    const {movies} = this.state
    return (
      <div>
        <SavedList list={this.state.savedList} removeFavorite={this.removeFavorite}/>
        <Route exact path="/"  render={ props => <MovieList {...props}  movies={movies} addToSavedList={this.addToSavedList}/>} />
        <Route path="/movie/:id"  render={props =>   <Movie {...props}  movies={movies} addToSavedList={this.addToSavedList}/>} />
      </div>
    );
  }
}
