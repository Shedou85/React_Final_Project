import { fetchAllMoviesActionCenter } from "../store/movieReducer";


export const fetchAllMovies = () => {

   return function(dispatch)  {
      fetch('https://api.jsonbin.io/v3/b/63cd389cace6f33a22c56c40/', {
         method: 'GET',
      }) 
         .then(response =>  response.json())
         .then(json =>  dispatch(fetchAllMoviesActionCenter(json.record.moviesData)));
   };
}