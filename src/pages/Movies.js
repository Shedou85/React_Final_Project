import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies} from '../FakeApi/movie';
import { useEffect } from 'react';




const Movies = () => {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies(movies));
  }, [dispatch]);
 console.log(movies.record); 
 // pomogi pozhalusto, ne mogu dostuchatsa do movies title i vse ostalnoe...
// jesli pishu movies.record.title  idet undefined 
  
  //const moviesList = movies.map((movie,idx) => {
  //  return  (
  //    <div key={idx}>
  //      <h1>{movie.title}</h1>
  //      <p>{movie.description}</p>
  //    </div>
  //  )
  //});

  return (
    <div>
      Movies
     {/*{moviesList}*/}
    </div>
  )
}

export default Movies