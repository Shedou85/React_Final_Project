import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const movieDefaultState = {
   movies: [],
};




const FETCH_MOVIES = 'FETCH_MOVIES';
const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const UPDATE_MOVIE = 'UPDATE_MOVIE';

const movieReducer = (state = movieDefaultState, action) => {
   switch (action.type) {
      case FETCH_MOVIES:
         return {
            ...state,
            movies: action.payload,
         };
      case ADD_MOVIE:
         return {
            ...state,
            movies: [...state.movies, action.payload]
         };
      case DELETE_MOVIE:
         return {
            ...state,
            movies: state.movies.filter((movie) => movie.id !== action.payload)
         };
      case UPDATE_MOVIE:
         return {
         };
      default:
         return state;
   }
}
export const store = createStore(movieReducer, composeWithDevTools(applyMiddleware(thunk)));

export const fetchAllMoviesActionCenter = (payload) => {
   return {type: FETCH_MOVIES, payload};
};
export const deleteMovieActionCenter = (payload) => {
   return {type: DELETE_MOVIE, payload};
};
export const updateMovieActionCenter = (payload) => {
   return {type: UPDATE_MOVIE, payload};
};
