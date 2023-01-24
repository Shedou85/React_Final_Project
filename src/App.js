import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import Contacts from './pages/Contacts';
//import LoginLayout from './layouts/LoginLayout';
import MainLayout from './layouts/MainLayout';
import Action from './pages/category/Action';



function App() {
  return (
    <div className="app">
     <Routes>
        {/*<Route path="/login" element={<LoginLayout />} />*/}

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/action" element={<Action />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
