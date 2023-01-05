import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
//test
function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleLogin = () => {
    setIsloggedIn(true);
  };

  return (
    <div className='page'>
      <Routes>
        <Route
          element={<ProtectedRoute isLoggedIn={!isLoggedIn} navigateTo='/' />}
        >
          <Route path='/signin' element={<Login handleLogin={handleLogin} />} />
        </Route>
        <Route
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} navigateTo='/signin' />
          }
        >
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
