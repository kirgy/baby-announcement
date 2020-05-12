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
import Virus from "./routes/Virus";
import Baby from "./routes/Baby";
// import ErrorNotFound from "./routes/404";
import Background from "./images/background.png";

class App extends Component {

  state = {
    devMenuOpen: false
  }

  constructor(props) {
    super(props);
    // const {pathname} = props.location;
    // console.log(pathname);
  }

  render() {
    console.log(this.props)

    return (
      <div className="App" style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",

      }}>

        <Router>
          {/* <div style={{
              position: "fixed",
              top: 0,
              right: 0,
              textAlign: "right"
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
                        <Link to="/virus">Virus</Link>
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
          </div> */}
              <Switch>
                <Route path="/about">
                  <div className="app-wrapper">
                      <div className="route-outer-wrapper">
                        <div className="route-inner-wrapper">                  
                          <About />
                        </div>
                      </div>
                    </div>
                </Route>
                <Route path="/users">
                  <div className="app-wrapper">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Users />
                      </div>
                    </div>                              
                  </div>                              
                </Route>
                <Route path="/meet">
                  <div className="app-wrapper">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Meet />     
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/engagement">
                  <div className="app-wrapper">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                      <Engagement />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/Wedding">
                  <div className="app-wrapper">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Wedding />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/house">
                  <div className="app-wrapper">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <House />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/virus">
                  <div className="app-wrapper dark-animate">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Virus />
                      </div>
                    </div>
                  </div>
                </Route>                
                <Route path="/now">
                  <div className="app-wrapper light-animate">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Baby />
                      </div>
                    </div>
                  </div>
                </Route>                                                                
                <Route path="/">
                  <div className="app-wrapper">
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Meet />
                      </div>
                    </div>
                  </div>
                </Route>                                      
                {/* <Route path="/404">
                  <ErrorNotFound />
                </Route>                 */}
              </Switch>  
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
