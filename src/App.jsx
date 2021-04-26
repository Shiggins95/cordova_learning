/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.scss';

function App({ platform }) {
  const [image, setImage] = useState();
  const popup = () => {
    window.navigator.notification.alert(
      'Test',
      () => console.log('testing'),
      'title test',
      'confirm',
    );
  };
  const takePhoto = () => {
    try {
      window.navigator.camera.getPicture(
        (success) => {
          console.log(success);
          setImage(success);
        },
        (error) => {
          console.log(error);
        },
        {},
      );
    } catch (e) {
      console.log('ERROR: ', e);
    }
  };
  return (
    <div className="App">
      <div className="header">
        <button type="button" onClick={takePhoto}>
          Take Photo
        </button>
      </div>
      <div className="photo">
        {image && <img src={image} alt="profile" width="100%" />}
      </div>
    </div>
  );
}

App.propTypes = {
  platform: PropTypes.string,
};
App.defaultProps = {
  platform: 'web',
};

export default App;
