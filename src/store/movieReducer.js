 const movieDefaultState = {
   movies: {},
   selectedMovie: [],
   newComment: []
};

export const saveState = (state) => {
   try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
   } catch (err) {
      console.log("error saving state");
   }
};

export const loadState = () => {
   try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
         return undefined;
      }
      return JSON.parse(serializedState);
   } catch (err) {
      return undefined;
   }
};
export const oldState = loadState();


const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_ONE_MOVIE = 'FETCH_ONE_MOVIE';
const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const UPDATE_MOVIE = 'UPDATE_MOVIE';
const ADD_COMMENT = 'ADD_COMMENT';

export const movieReducer = (state = movieDefaultState, action) => {
   switch (action.type) {
      case FETCH_MOVIES:
         return {
            ...state,
            movies: action.payload
         };
         case FETCH_ONE_MOVIE:
         return {
            ...state,
            selectedMovie: action.payload
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
            ...state, movies: state.movies.map((movie) => {
               if (movie.id === action.payload.id) {
                  return action.payload;
               }
               return movie;
            })
         };
      case ADD_COMMENT:
         return {
            ...state, newComment: [...state.newComment, action.payload]
         };
      default:
         return state;
   }
}


export const fetchAllMoviesActionCenter = (payload) => {
   return {type: FETCH_MOVIES, payload};
};
export const fetchOneMovieActionCenter = (payload) => {
   return {type: FETCH_ONE_MOVIE, payload};
};
export const deleteMovieActionCenter = (payload) => {
   return {type: DELETE_MOVIE, payload};
};
export const updateMovieActionCenter = (payload) => {
   return {type: UPDATE_MOVIE, payload};
};
export const addCommentActionCenter = (payload) => {
   return {type: ADD_COMMENT, payload};
};

