import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter, BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import './sass/App.css';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <CookiesProvider>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  </CookiesProvider>,
    
  document.getElementById('root')
);
