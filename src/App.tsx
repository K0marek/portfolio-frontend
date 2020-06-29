import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/main/Dashboard';
import Player from './components/player/Player';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/player' component={Player} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
