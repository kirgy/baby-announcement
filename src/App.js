import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container as NesContainer} from "nes-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Meet from "./routes/Meet";
import Engagement from "./routes/Engagement";
import Wedding from "./routes/Wedding";
import House from "./routes/House";
import Baby from "./routes/Baby";


class App extends Component {
  render() {
    return (
      <div className="App">
        <NesContainer>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Welcome</Link>
                  </li>
                  <li>
                    <Link to="/meet">Meet</Link>
                  </li>
                  <li>
                    <Link to="/engagement">Engagement</Link>
                  </li>
                  <li>
                    <Link to="/wedding">Wedding</Link>
                  </li>
                  <li>
                    <Link to="/house">House</Link>
                  </li>                    
                  <li>
                    <Link to="/now">Now</Link>
                  </li>                                  
                </ul>
              </nav>

              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/meet">
                  <Meet />                  
                </Route>
                <Route path="/engagement">
                  <Engagement />
                </Route>
                <Route path="/Wedding">
                  <Wedding />
                </Route>
                <Route path="/house">
                  <House />
                </Route>
                <Route path="/now">
                  <Baby />
                </Route>                                                                
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>

        </NesContainer>
      </div>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
