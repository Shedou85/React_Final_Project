import { fetchAllMoviesActionCenter } from "../store";


export const fetchAllMovies = () => {

   return async function(dispatch)  {
      fetch('https://api.jsonbin.io/v3/b/63cd389cace6f33a22c56c40/') 
         .then(response =>  response.json())
         .then(json =>  dispatch(fetchAllMoviesActionCenter(json)));
   };
}


