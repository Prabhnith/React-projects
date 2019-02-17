import React, { Component } from 'react';

import MainPage from './containers/MainPage/MainPage';
import { NavLink, Route, Switch } from 'react-router-dom';
// import Projects from './components/Projects/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="Nav navbar-nav">

          {/* <li ><NavLink className="NavLink" to="/MainPage">MainPage</NavLink></li> */}
          {/* <li ><NavLink className="NavLink" to="/Projects">Projects</NavLink></li> */}

        </ul>
        <Switch>
          <Route path="/" exact component={MainPage} />
          {/* <Route path="/MainPage" exact component={MainPage} /> */}
          {/* <Route path="/Projects" component={Projects} /> */}
        </Switch>
        {/* <MainPage /> */}
      </div>
    );
  }
}

export default App;
