import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPages from './AboutPages';
import AboutApp from './AboutApp';
import AboutAuthor from './AboutAuthor';

const About = () => { //eslint-disable-line
  return (
    <div className="about__content">
      <AboutPages />
      <Routes>
        <Route path="/aboutapp" element={<AboutApp />} />
        <Route path="/aboutauthor" element={<AboutAuthor />} />
      </Routes>
    </div>
  );
};
export default About;
