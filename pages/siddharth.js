import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Siddharth = () => {
  useEffect(() => {
    document.title = "Siddharth";
  }, []);

  return (
    <React.Fragment>
      <h1>Siddharth</h1>
      <p>Hi, I’m Siddharth Kumar, a web developer with a passion for creating efficient and user-friendly applications. I built this React app using only CDN to demonstrate my skills in modern web technologies. In addition to web development, I’m working on language learning apps and providing valuable resources about government schemes to help others. I’m also pursuing a career in engineering, with a goal to work on innovative projects in Japan or Singapore. Thank you for visiting my page!</p>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </React.Fragment>
  );
};

export default Siddharth;