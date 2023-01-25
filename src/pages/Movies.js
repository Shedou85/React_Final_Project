import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMovies} from '../FakeApi/MovieGetApi';
import { Link } from 'react-router-dom';





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
            <div className='movie-card-img' style={{backgroundImage: `url(${movie.imageURL})`}}>
            {/*<img src={movie.imageURL} alt={movie.title} />*/}
            </div>
            <div className='descriptions'>
              <div className='movie-title'>
                <Link to={`/movies/${movie.id}`} className='movie-title'>{movie.title}</Link>
              </div>
              <div className='movie-year'>
                <p>( {movie.year} )</p>
              </div>
              <div>
                <div className='card-btn'><a href={movie.trailer} rel='noreferrer' target='_blank'>Trailer on YouTube</a> </div>
              </div>
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