import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log('Service worker registered!'); // eslint-disable-line no-console
    })
    .catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
