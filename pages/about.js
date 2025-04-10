import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <React.Fragment>
     {/* HTML Begins */}
     
      <h1>About Us</h1>
      <p>Welcome to our website, where we strive to provide engaging, informative, and enriching content to help users explore new ideas, learn valuable skills, and connect with like-minded individuals. Our mission is to foster a community built on knowledge, creativity, and collaboration. Whether you're here to discover insightful articles, find helpful resources, or simply enjoy the experience, we're committed to delivering high-quality content that resonates with our diverse audience. With a passion for continuous improvement and a dedication to offering fresh, relevant information, we aim to be a trusted source that supports your personal and professional growth. Thank you for being a part of our journey, and we hope you find our platform both inspiring and useful as you navigate through the content we have carefully curated just for you.</p>
      <nav>
      <p>Go to <Link to="/siddharth">Siddharth</Link> or <Link to="/blogs">Blogs</Link></p>
      </nav>
      
     {/* HTML ENDS */}
    </React.Fragment>
  );
};

export default About;