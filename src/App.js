import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import HomepageContainer from './components/HomepageContainer'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Route exact path="/" component={HomepageContainer} />

      </div>
    );
  }
}

export default App;
