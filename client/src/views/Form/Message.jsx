import React from 'react';
import style from "./Alert.module.css";

const Alert = ({ message, onClose }) => {
  return (
    <div className={style.container}>
      <div className={style.alert}>
        <span className={style.close} onClick={onClose}>&times;</span>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
