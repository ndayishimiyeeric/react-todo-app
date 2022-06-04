import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import AboutApp from './AboutApp';
import AboutAuthor from './AboutAuthor';
import AboutPages from './AboutPages';

const TodoContainer = () => { // eslint-disable-line
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/app"
          element={
            (
              <div className="about__content">
                <AboutPages />
                <AboutApp />
              </div>
            )
          }
        />
        <Route
          path="/author"
          element={
            (
              <div className="about__content">
                <AboutPages />
                <AboutAuthor />
              </div>
            )
          }
        />
      </Routes>
    </>
  );
};

export default TodoContainer;
