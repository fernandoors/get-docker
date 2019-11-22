import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './components/App'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route exect path="/" component={App} />
      </Switch>
      <Footer />
    </Router>
  );
}