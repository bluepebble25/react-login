import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserInfoPage from './pages/UserInfoPage';
import AuthRoute from './components/Auth/AuthRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginPage />} />
        <Route
          path="/userinfo"
          element={
            <AuthRoute>
              <UserInfoPage />
            </AuthRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
