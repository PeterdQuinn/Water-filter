import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import CustomizePage from './pages/CustomizePage';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/customize" component={CustomizePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
