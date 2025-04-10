// links.js
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Siddharth from './pages/siddharth';
import NotFound from './notfound';

const routes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/siddharth', component: Siddharth },
];

export default routes;