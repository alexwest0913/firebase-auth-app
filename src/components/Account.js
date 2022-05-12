import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log('you are logged out')
    } catch (e) {
      console.log(e.message)
    }
  }
  return (
    <>
    <div className='text-center max-w-[400px] mx-auto mt-40 mb-5 p-3 border border-black-500'>
      <h1 className='text-2xl font-bold py-4'>Profile</h1>
      <p>Email: {user && user.email}</p>
      <button onClick={handleLogout}className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-2 text-white'>Logout</button>
    </div>
    </>
  )
}

export default Account;
