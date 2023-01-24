import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';



const MainLayout = () => {
   return (
      <div>
         <header>
            <div className='header-item'>
               <div className='logo'>Logo</div>
               <nav>
                  <NavLink to="/" className="active">Home</NavLink>
                  <NavLink to="/movies" className="active">Movies</NavLink>
                  <NavLink to="/contacts" className="active">Contacts</NavLink>
               </nav>
            </div>
         </header>
         <div className='wrapper'>
            <div className='aside'>
                  <aside>
                  <ul>
                     <li>
                        <Link to="/movies">All</Link>
                     </li>
                     <li>
                        <Link to="/action">Action</Link>
                     </li>
                     <li>
                        <Link to="/">Comedy</Link>
                     </li>
                     <li>
                        <Link to="/">Thriller</Link>
                     </li>
                  </ul>
               </aside>
               </div>
            <main>
            
            <div className='outlet'>
               <Outlet />
            </div>
         
            

            </main>
         </div>
      
         
         <footer>
            <p>Footer</p>
         </footer>

      </div>
   )
}

export default MainLayout