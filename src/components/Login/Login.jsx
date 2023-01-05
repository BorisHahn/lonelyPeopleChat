const Login = () => {
  return (
    <form className='login-form'>
      <h2>Введите свое имя для продолжения:</h2>
      <div className='login-form__container'>
        <label className='login-form__label'>Имя:</label>
        <input className='login-form__input'></input>
        <button type='submit'>Войти</button>
      </div>
    </form>
  );
};

export default Login;
