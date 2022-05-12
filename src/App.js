import React from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import ForgotPassword from './components/ForgotPassword';
import {AuthContextProvider} from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
