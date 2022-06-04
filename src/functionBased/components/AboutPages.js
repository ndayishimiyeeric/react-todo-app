import React from 'react';
import { Link } from 'react-router-dom';

const AboutPages = () => { //eslint-disable-line
  return (
    <ul className="about__list">
      <li>
        <Link to="/app">About App</Link>
      </li>
      <li>
        <Link to="/author">About Author</Link>
      </li>
    </ul>
  );
};

export default AboutPages;
