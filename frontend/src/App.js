import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={User Profile} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
