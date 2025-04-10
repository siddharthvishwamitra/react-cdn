# React Project with CDN

This is a simple React project set up using a CDN for quick and easy development without the need for a build process. It uses React, ReactDOM, and React Router directly from CDNs. This project is great for learning React, experimenting with components, or building small applications quickly without needing to set up a complex development environment.

## Project Setup

This project allows you to use React in the browser directly, without the need for npm or a bundler like Webpack. It is perfect for quick prototyping, understanding React, or learning how to integrate libraries in a simple, straightforward way.

### Key Features

- **No Build Setup**: Run React directly from CDNs without needing a build process (e.g., Webpack, Babel).
- **React and React Router**: Easily set up navigation with React Router without requiring complex setup.
- **Browser-based Development**: Simply open the `index.html` file in your browser to see your changes reflected instantly.
- **Component-based Structure**: Follow React’s component-based approach for building applications.

### Key Files:

- **index.html**: The main HTML file that includes the React CDN links and the root `<div>` where the React app is rendered.
- **index.js**: The entry point where React is initialized and the root component is rendered.
- **App.js**: The main component that serves as the root of your application.
- **About.js**: A simple example component showing how to use React and React Router.

## CDN Setup

The project uses the following CDN links for React, ReactDOM, and React Router:

1. **React**: Include the React CDN script in the `<head>` of your `index.html` file.
2. **ReactDOM**: Add the ReactDOM CDN script in the `<head>` of your `index.html` file.
3. **React Router**: Include the React Router CDN script for routing functionality.
4. **SystemJS**: To load modules correctly, include the SystemJS CDN in the `<head>` of your `index.html`.

These libraries are included in the `index.html` file inside the `<head>` tag. By using these CDNs, we ensure that the project loads the necessary libraries directly from the web without needing local dependencies.

## Example Code

Here is an example of a simple `About.js` component used in the app:

```js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about us.</p>
      <nav>
        <a href="/">Home</a>
        <Link to="/siddharth">Siddharth</Link>
      </nav>
    </div>
  );
};

export default About;
```

## How to Use

1. Clone or download this repository to your local machine.

   ```bash
   git clone https://github.com/siddharthvishwamitra/react-cdn.git
