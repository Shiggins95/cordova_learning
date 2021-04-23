import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const renderReactDOM = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

if (window.cordova) {
  document.addEventListener(
    'deviceready',
    () => {
      renderReactDOM();
    },
    false,
  );
} else {
  renderReactDOM();
}
