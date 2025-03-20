import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './template/header';
import Footer from './template/footer';
import routes from './links';
import NotFound from './notfound';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        {routes.map(({ path, component, exact }, index) => (
          <Route key={index} path={path} exact={exact} component={component} />
        ))}
        <Route component={NotFound} />
      </Switch>
    </main>
    <Footer />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);