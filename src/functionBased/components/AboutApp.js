import React from 'react';

/* eslint-disable quotes */

const AboutApp = () => {
  const aboutData = {
    title: "About the App",
    description:
    "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
  };

  return (
    <div className="main__content">
      <h1>{aboutData.title}</h1>
      <p>{aboutData.description}</p>
    </div>
  );
};

export default AboutApp;
