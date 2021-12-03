import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import SingleBeer from './pages/SingleBeer'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={ListBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:id" component={SingleBeer} />

      </Switch>
    </div>
  );
}

export default App;
