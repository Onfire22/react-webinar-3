import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const LoginForm = ({ onSubmit, error, status }) => {
  const navigate = useNavigate();
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
  }, [status])

  return (
    <div className="Form-container">
      <form className="Form-login" onSubmit={(e) => handleSubmit(e)}>
        <h2>Вход</h2>
        <label className="form-label" htmlFor="login">
          Логин
          <input
            id="login"
            type="text"
            value={values.login}
            onChange={({ target }) => setValues({...values, login: target.value})}
          />
        </label>
        <label className="form-label" htmlFor="password">
          Пароль
          <input
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

export default LoginForm;
