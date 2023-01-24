import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies} from '../FakeApi/MovieGetApi';





const Movies = () => {

  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [ dispatch ]);
  console.log(movies);

  const moviesList = movies.map((movie, idx) => {
    return (
          
        <div className='movie-card' key={idx}>
          <div className='movie-card-item' >
            <div className='movie-card-img'>
            <img src={movie.imageURL} alt={movie.title} />
            </div>
            {/*<div className='movie-card-title'>
              <h3>{movie.title}</h3>
            </div>*/}
            <div className='descriptions'>
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <button>Play trailer on YouTube</button>
            </div>
          </div>
        </div>
        
      
    )
  })
  
  return (
    <div className='movie-cards-wrapper'>
      {moviesList}
    </div>
  )
}

export default Movies