import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Coments from '../components/Coments';



const Movie = () => {
 
  const selectedMovie = useSelector(state => state.movies.selectedMovie);
  
  

 


  return (
     <div className='content-wrapper'>
      <div className='page-header'>
        <div className='page-title'>
        <h1>{selectedMovie.title} </h1>
        
        </div>
        <hr />
        <div className='page-btn'>
          <div className='btn-back'><Link to="/movies">Go Back</Link> </div>
        </div>
      </div>
      
      
       <div className='movie-card'>
          <div className='movie-card-item' >
            <div className='movie-card-img' style={{backgroundImage: `url(${selectedMovie.imageURL})`}}>
            </div>
            <div className='descriptions'>
              <div className='movie-title'>
                {selectedMovie.title}
              </div>
              <div className='movie-description'>
                <p>Description : {selectedMovie.description}</p>
              </div>
              <div className='movie-director'>
                <p>Director : {selectedMovie.director} </p>
              </div>
              <div className='movie-actors'>
                <p>Actors : {selectedMovie.actors} </p>
              </div>
              <div className='movie-genre'>
                <p>Genre : {selectedMovie.genre} </p>
              </div>
              <div className='movie-rating'>
                <p>Rating : {selectedMovie.rating} </p>
              </div>
              <div className='movie-duration'>
                <p>Duration : {selectedMovie.duration} min.</p>
              </div>
              <div className='movie-year'>
                <p>Year : {selectedMovie.year} </p>
              </div>
              <div>
                <div className='card-btn'><a href={selectedMovie.trailer} rel='noreferrer' target='_blank'>Trailer on YouTube</a> </div>
              </div>
            </div>
          </div>
       </div>
       <div className='movie-container'>
        <div className='movie-player'>
          <iframe src={selectedMovie.movieURL} 
          allowFullScreen={false} 
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          width="700" height="393" 
          frameBorder="0"
          title='frame' >
          </iframe>
        </div>
        <div className='comments-container'>
          Comments will be here
          <Coments />
        </div>
       </div>

        
    </div>
  )
   
  
}

export default Movie