import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter, BrowserRouter} from 'react-router-dom';
import App from './App';
import './sass/App.css';
// const SomeComponent = withRouter(props => <MyComponent {...props}/>);

let AppWithRouter = withRouter(props => <App {...props}/>);

ReactDOM.render(
  <BrowserRouter>
    <AppWithRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
