import './Login.css';
import React, { useState } from 'react';
const Login = ({ handleLogin }) => {
  
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(name);
  };

  const onChange = (e) => {
    e.preventDefault();
    const name = e.target.value;
    setName(name);
  };

  return (
    <form className='login-form' onSubmit={onSubmit}>
      <h2 className='login-form__title'>Enter your Name to continue:</h2>
      <div className='login-form__container'>
        <input
          className='login-form__input'
          placeholder='Name'
          onChange={onChange}
          required
        ></input>
        <button className='login-form__button' type='submit'>
          Enter
        </button>
      </div>
    </form>
  );
};

export default Login;
