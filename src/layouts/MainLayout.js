import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { useState } from 'react';



const MainLayout = () => {   
   return (
      <div>
         <header>
            <div className='header-item'>
               <div className='logo'>MD Coding</div>
               <nav>
                  <NavLink to="/" className="isActive">Home</NavLink>
                  <NavLink to="/movies" className="isActive">Movies</NavLink>
                  <NavLink to="/contacts" className="isActive">Contacts</NavLink>
                  <NavLink to="/login" className="isActive">Login</NavLink>
               </nav>
            </div>
         </header>
         <div className='wrapper'>
            <div className='aside'>
                  <aside>
                  <ul>
                     <p>Categorys:</p>
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
            <p>Web App Was Created By Marius @2023</p>
         </footer>

      </div>
   )
}

export default MainLayout