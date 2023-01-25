
 const moviesDefaultStates = {
   movies: [],
   isPending: false,
   error: null,
};

const FETCH_MOVIES_PENDING = 'FETCH_MOVIES_PENDING';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const UPDATE_MOVIE = 'UPDATE_MOVIE';

export const moviesReducer = (state = moviesDefaultStates, action) => {
   switch (action.type) {
      case FETCH_MOVIES_PENDING:
         return {
            ...state,
            isPending: true,
         };
      case FETCH_MOVIES_SUCCESS:
         return {
            ...state,
            isPending: false,
            movies: action.payload,
         };
      case FETCH_MOVIES_ERROR:
         return {
            ...state,
            isPending: false,
            error: action.payload,
         };
      case ADD_MOVIE:
         return {
            ...state,
            movies: [...state.movies, action.payload],
         };
      case DELETE_MOVIE:
         return {
            ...state,
            movies: state.movies.filter(movie => movie.id !== action.payload),
         };
      case UPDATE_MOVIE:
         return {
            ...state,
            movies: state.movies.map(movie => movie.id === action.payload.id ? action.payload : movie),
         };
      default:
         return state;
   }
};

export const fetchAllMoviesActionCenter = (payload) => {
   return {type: FETCH_MOVIES_PENDING, payload};
};
export const deleteMovieActionCenter = (payload) => {
   return {type: DELETE_MOVIE, payload};
};
export const fetchAllMoviesSuccess = (payload) => {
   return {type: FETCH_MOVIES_SUCCESS, payload};
};
export const getMovies = state => state.moviesDataList;
export const getMoviesPending = state => state.isPending;




