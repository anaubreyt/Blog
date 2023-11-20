import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GoBack.css';

const GoBackButton = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button className="go-back-button" onClick={goBack}>
      Назад
    </button>
  );
};

export { GoBackButton };