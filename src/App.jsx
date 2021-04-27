/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './App.scss';

function Modal({ display, message, callback }) {
  useEffect(() => {
    setTimeout(() => {
      callback();
    }, 2500);
  });
  return display && <div className="modal">{message}</div>;
}

Modal.propTypes = {
  display: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
Modal.defaultProps = {
  callback: () => {},
};

function App({ platform }) {
  const [image, setImage] = useState();
  const popup = (message, title, buttonName) => {
    window.navigator.notification.alert(
      message,
      () => {},
      title,
      buttonName,
    );
  };
  const saveImage = () => {
    try {
      window.cordova.plugins.imagesaver.saveImageToGallery(
        image,
        onSaveImageSuccess,
        onSaveImageError,
      );
    } catch (e) {
      console.log('error: ', e);
    }
  };

  const onSaveImageSuccess = () => {
    popup('Saved to Camera Roll', 'Image Saved');
  };

  const onSaveImageError = () => {
    popup('Unable to save to Camera Roll', 'Image Not Saved');
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
          Take Photo Now
        </button>
        {image && (
          <button type="button" onClick={saveImage}>
            Save Image
          </button>
        )}
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
