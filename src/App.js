import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../src/contexts/CurrentUserContext';
import Login from './components/Login/Login';
import Main from './components/Main/Main';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [messages, setMessages] = useState([]);

  const handleLogin = (data) => {
    setIsloggedIn(true);
    setCurrentUser({ name: data });
  };

  const handleLogout = () => {
    setIsloggedIn(false);
    setCurrentUser({});
  }

  const handleAddMessages = (message) => {
    const newMessages = [
      ...messages,
      { user: currentUser.name, date: new Date(), text: message },
    ];
    setMessages(newMessages);
    localStorage.setItem('messages', JSON.stringify(newMessages));
  };

  const loadMsgFromLocal = () => {
    const msg = JSON.parse(localStorage.getItem('messages'));
    if (msg != null) {
      setMessages(msg);
    }
  };

  const refreshMsg = () => {
    loadMsgFromLocal();
    setTimeout(refreshMsg, 1000);
  };

  useEffect(() => {
    refreshMsg();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            element={<ProtectedRoute isLoggedIn={!isLoggedIn} navigateTo="/" />}
          >
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
          </Route>
          <Route
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn} navigateTo="/signin" />
            }
          >
            <Route
              path="/"
              element={
                <Main
                  handleAddMessages={handleAddMessages}
                  messages={messages}
                  handleLogout={handleLogout}
                />
              }
            />
          </Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
