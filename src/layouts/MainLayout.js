import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';



const MainLayout = () => {
   return (
      <div className='wrapper'>
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

         <main>
            <div className='aside-menu'>
               <aside>
               <ul>
                  <li>
                     <Link to="/movies">All</Link>
                  </li>
                  <li>
                     <Link to="/action">Action</Link>
                  </li>
                  <li>
                     <Link to="/movies?category=comedy">Comedy</Link>
                  </li>
                  <li>
                     <Link to="/movies?category=thriller">Thriller</Link>
                  </li>
               </ul>
            </aside>
            </div>
            <div className='outlet'>
               <Outlet />
            </div>
         
            

         </main>
         <footer>
            <p>Footer</p>
         </footer>

      </div>
   )
}

export default MainLayout