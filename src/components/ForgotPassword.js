import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import { Alert } from 'react-bootstrap';

const ForgotPassword = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { resetPassword } = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    try {
      await resetPassword(email)
      setMessage('Check your inbox for further instructions')
    } catch {
      setError('Failed to reset password')
    }
  }

  return (
    <>
    <div className='max-w-[500px] mx-auto mt-40 p-4 border border-black-500 rounded'>
      <div>
        <h1 className='text-center text-2xl font-bold py-2'>Reset Password</h1>
      </div>
      {error && <Alert variant='danger'>{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-small'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded' type='email' required/>
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-4 text-white rounded'>Reset Password</button>
      </form>
    </div>
    <p className='text-center py-2'>
      Need an account? <Link to='/signup' className='text-blue-500 underline'> Sign Up</Link>
    </p>
    </>
  )
}

export default ForgotPassword;
