import React, { Component } from 'react';
import logo from './logo.svg';
import './sass/App.css';
import { Container as NesContainer} from "nes-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Meet from "./routes/Meet";
import Engagement from "./routes/Engagement";
import Wedding from "./routes/Wedding";
import House from "./routes/House";
import Virus from "./routes/Virus";
import Baby from "./routes/Baby";
import Now from "./routes/Now";
import { withCookies, Cookies } from 'react-cookie';

class App extends Component {

  state = {
    devMenuOpen: false,
    hasLanded: true
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { cookies } = this.props;
    let hasLanded = cookies.get('landed');

    if(hasLanded != "hasHanded") {
      cookies.set("landed", "hasHanded");
      this.setState({
        hasLanded: false
      })      
    } else {
      this.setState({
        hasLanded: true
      })
    }
  }

  redirectCookie() {
    return (this.state.hasLanded == false) ? <Redirect to="/" /> : null;
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
        
        <Router>
              <Switch>
                <Route path="/about">
                  <div className="app-wrapper">
                    {this.redirectCookie()}
                      <div className="route-outer-wrapper">
                        <div className="route-inner-wrapper">                  
                          <About />
                        </div>
                      </div>
                    </div>
                </Route>
                <Route path="/users">
                  <div className="app-wrapper">
                    {this.redirectCookie()}
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Users />
                      </div>
                    </div>                              
                  </div>                              
                </Route>
                <Route path="/meet">
                  <div className="app-wrapper">
                    {this.redirectCookie()}
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Meet />     
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/engagement">
                  <div className="app-wrapper">
                    {this.redirectCookie()}
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                      <Engagement />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/Wedding">
                  <div className="app-wrapper">
                    {this.redirectCookie()}
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Wedding />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/house">
                  <div className="app-wrapper">
                    {this.redirectCookie()}
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <House />
                      </div>
                    </div>
                  </div>
                </Route>
                <Route path="/virus">
                  <div className="app-wrapper dark-animate">
                    {this.redirectCookie()}
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Virus />
                      </div>
                    </div>
                  </div>
                </Route>                
                <Route path="/now">
                  <div className="app-wrapper light-animate">
                    {this.redirectCookie()}
                    <div className="route-outer-wrapper">
                      <div className="route-inner-wrapper">                  
                        <Now />
                      </div>
                    </div>
                  </div>
                </Route>                                                                
                <Route path="/">
                  <div className="app-wrapper">
                    {this.redirectCookie()}
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

export default withCookies(App);
