import { fetchAllMoviesActionCenter } from "../store/movieReducer";


export const fetchAllMovies = () => {

   return function(dispatch)  {
      fetch('https://api.jsonbin.io/v3/b/63d60fdcebd26539d06b1ad2', {
         method: 'GET',
   }) 
         .then(response =>  response.json())
         .then(json =>  dispatch(fetchAllMoviesActionCenter(json.record.moviesDataBase)));
   };
}