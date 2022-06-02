import React from 'react';

/* eslint-disable quotes */

const AboutAuthor = () => {
  const aboutData = {
    title: "About the Author",
    description:
    "This app was developed by Nderic Odalton, Web developer, Twitter @odaltongain.",
  };

  return (
    <div className="main__content">
      <h1>{aboutData.title}</h1>
      <p>{aboutData.description}</p>
    </div>
  );
};

export default AboutAuthor;
