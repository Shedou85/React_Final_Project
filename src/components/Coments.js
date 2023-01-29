import React from 'react'
import { useSelector } from 'react-redux'
import { addCommentActionCenter } from '../store/movieReducer'

const Coments = () => {
   const selectedMovie = useSelector(state => state.movies.selectedMovie);




  return (
    <div>
      <form>
            <input type="text"
              name="username"
              placeholder='User Name'
              className='comment-username'
            />
            <input type="text"
              name='comment'
              placeholder='Comment'
              className='comment-comment'
            />
          </form>
          
          <div className='comments-section'>
            <div className='comment-card'>
               <div className='comment-card-username'>
                  <p>User Name :{selectedMovie.comments.testname}</p>
               </div>
               <div className='comment-card-comment'>
                  <p>Comment : {selectedMovie.comments.testcomment}</p>
               </div>
               

            </div>

          </div>
    </div>
  )
}

export default Coments