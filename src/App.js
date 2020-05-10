import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/App.css';
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
// import ErrorNotFound from "./routes/404";
import Background from "./images/background.png";

class App extends Component {

  state = {
    devMenuOpen: false
  }

  render() {
    return (
      <div className="App" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}>
        <div style={{
          // backgroundImage: `url(${Background})`,
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          opacity: 0.2
        }}></div>
        <Router>
          <div style={{
              position: "fixed",
              top: 0,
              right: 0,
              "text-align": "right"
            }}>
            <button onClick={() => {this.setState({devMenuOpen: !this.state.devMenuOpen})}}>
              {this.state.devMenuOpen ? '=' : 'X'}
            </button>
            <div>
                  <nav style={{
                    display: this.state.devMenuOpen ? '' : 'none'
                  }}>
                    <ul>
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
                      <li>
                        <Link to="/404">404</Link>
                      </li>                      
                    </ul>
                  </nav>
                                       
            </div>
          </div>

          <div style={{
            position: "absolute",
            top: "50%",
            "-ms-transform": "translateY(-50%)",
            transform: "translateY(-50%)",
            left: 0,
            overflow: "hidden",
            width: "100%",
            padding: "2em 1em",
          }}>
            <div style={{
              "max-width": "750px",
              margin: "0 auto",
            }}>
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
                  <Meet />
                </Route>                                      
                {/* <Route path="/404">
                  <ErrorNotFound />
                </Route>                 */}
              </Switch>  
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
