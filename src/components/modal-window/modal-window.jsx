import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import classes from './modal-window.module.scss';

const ModalWindow = ({ onClickNo, onClickYes }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.modalAlert}>
        <div className={classes.alertSymbol}>!</div>
        <div className={classes.alertMessage}>Are you sure to delete this article?</div>
      </div>
      <div className={classes.modalButtons}>
        <Button size="small" onClick={onClickNo}>
          No
        </Button>
        <Button className={classes.modalButtonYes} size="small" type="primary" onClick={onClickYes}>
          Yes
        </Button>
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  onClickNo: PropTypes.func.isRequired,
  onClickYes: PropTypes.func.isRequired,
};

export default ModalWindow;
