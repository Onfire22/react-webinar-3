import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const LoginForm = ({ onSubmit, error, status, reset }) => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  useEffect(() => {
    if (status === 'success') {
      navigate(-1);
    }
  }, [status]);

  useEffect(() => {
    inputRef.current.focus();
    reset();
  }, []);

  return (
    <div className="Form-container">
      <form className="Form-login" onSubmit={(e) => handleSubmit(e)}>
        <h2>Вход</h2>
        <label className="form-label" htmlFor="login">
          Логин
          <input
            className="Form-input"
            id="login"
            type="text"
            ref={inputRef}
            value={values.login}
            onChange={({ target }) => setValues({...values, login: target.value})}
          />
        </label>
        <label className="form-label" htmlFor="password">
          Пароль
          <input
            className="Form-input"
            id="password"
            type="password"
            value={values.password}
            onChange={({ target }) => setValues({...values, password: target.value})}
          />
        </label>
        {error && <div className="Form-feedback">{error}</div>}
        <button type="submit">Войти</button>
      </form>
    </div>
  );  
};

export default React.memo(LoginForm);
