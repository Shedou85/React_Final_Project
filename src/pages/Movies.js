import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAllMovies } from '../FakeApi/MovieGetApi';
import { fetchOneMovieActionCenter } from '../store/movieReducer';






const Movies = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [ dispatch ]);
  console.log(movies);

  function moviePage(movies) {
    dispatch(fetchOneMovieActionCenter(movies))
    navigate('/movies/:id')
  }


  const moviesList = movies.movies.map((movie, idx) => {
    return (
        <div className='movie-card' key={idx}>
          <div className='movie-card-item' >
            <div className='movie-card-img' style={{backgroundImage: `url(${movie.imageURL})`}}>
            </div>
            <div className='descriptions'>
              <div className='movie-title' onClick={() => {moviePage(movie)}} data-id={movie.idx}>
                {movie.title}
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