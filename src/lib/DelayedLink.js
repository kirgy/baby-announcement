import React, { Component } from 'react';
import { render } from 'react-dom';
// import './style.css';

import { 
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect
} from 'react-router-dom';


export default class DelayedLink extends Component {
    state = {
      delay: 2000,
      t: false,
    }
  
    handleClick = e => {
      e.preventDefault();
      window.setTimeout(
        () => this.setState({ t: true }), this.state.delay);
    }
  
    render () {
      const { delay, t } = this.state;
      const { to, label } = this.props;
      return t 
        ? <Redirect to={to} />
        : <Link onClick={ this.handleClick } to={to}>
            { this.props.label }
          </Link>
    }
  }