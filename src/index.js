import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import SearchButtonApp from './components/SearchButtonApp';
import './index.css';

ReactDOM.render(
  <App key = 'root'/>,
  document.getElementById('root'),

);
ReactDOM.render(
  <SearchButtonApp />,
  document.getElementById('searchButton')
);
