import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <React.Fragment>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Whether you have questions, feedback, or suggestions, your thoughts are always welcome. You can reach us via email at react@react.app and we will get back to you as soon as possible. If you prefer, feel free to follow us on our social media channels for the latest updates and announcements. Your engagement helps us improve and provide even better resources to our community. Thank you for reaching out!</p>
      <nav>
        <p>Go to <Link to="/about">About</Link></p>
      </nav>
    </React.Fragment>
  );
};

export default Contact;