import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter, BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import './sass/App.css';
// const SomeComponent = withRouter(props => <MyComponent {...props}/>);

// let AppWithRouter = withRouter(props => <App {...props}/>);

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('root')
);
