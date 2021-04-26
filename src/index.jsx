import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const renderReactDOM = () => {
  let platform;
  try {
    platform = device.platform;
  } catch (e) {
    console.log('e', e);
  }
  ReactDOM.render(
    <React.StrictMode>
      <App platform={platform} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

const app = {
  init() {
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
  },
};

app.init();
