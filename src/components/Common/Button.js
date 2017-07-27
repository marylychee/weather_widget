import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './Button.css'

const Button = ({ onClick }) => {
  return (
    <FloatingActionButton
      secondary={true}
      className="btn-circle"
      onClick={() => onClick && onClick()}>
      <ContentAdd />
    </FloatingActionButton>
  );
};

export default Button;
