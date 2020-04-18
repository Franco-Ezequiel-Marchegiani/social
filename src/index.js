import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Link, Route, Router} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import Home from './Home';
ReactDOM.render(<BrowserRouter>)
  <div>

    <Route pathn='/home' component={Home} />
  </div>
  </BrowserRouter>, document.getElementById('root'));



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
