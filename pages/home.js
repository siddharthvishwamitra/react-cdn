import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "My React App";
  }, []);

  return (
    <React.Fragment>
      <h1>Welcome to My React App</h1>
      <p>This app is built using React, and I'm excited to showcase the power of modern web development through a lightweight and efficient design. My goal is to create an interactive experience for users, with an emphasis on simplicity and functionality.</p>
      <p>Explore the features of this app, learn more about my projects, or reach out to me through the contact page. I hope this platform serves as a valuable resource for anyone looking to explore the world of web development, education, and technology.</p>
      <p>Thank you for visiting, and feel free to explore the different sections of the site to learn more about my work and the services I offer.</p>
      <p>Clone this repository from <a href="https://github.com/siddharthvishwamitra/react-cdn">GitHub</a></p>
    </React.Fragment>
  );
};

export default Home;