import React from 'react';
import './style.css';

const userContent = ({ select }) => {
  return (
    <div className="User-content">
      <h2 className="User-title">Профиль</h2>
      <div className="User-info">
        <p className="User-info_title">Имя:</p>
        <p className="User-info_description">{select.name}</p>
      </div>
      <div className="User-info">
        <p className="User-info_title">Телефон:</p>
        <p className="User-info_description">{select.phone}</p>
      </div>
      <div className="User-info">
        <p className="User-info_title">email:</p>
        <p className="User-info_description">{select.email}</p>
      </div>
    </div>
  );
};

export default React.memo(userContent);
