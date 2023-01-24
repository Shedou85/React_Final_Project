import { fetchAllMoviesActionCenter } from "../store";


export const fetchAllMovies = () => {

   return function(dispatch)  {
      fetch('https://api.jsonbin.io/v3/b/63cd389cace6f33a22c56c40/', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '63cd389cace6f33a22c56c40',
         },
         credentials: 'omit',
         //get the image url from the jsonbin.io
      }) 
         .then(response =>  response.json())
         .then(json =>  dispatch(fetchAllMoviesActionCenter(json.record.moviesData)));
   };
}