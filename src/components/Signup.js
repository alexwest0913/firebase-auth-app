import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';
import { Alert } from 'react-bootstrap';

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const {createUser} = UserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(password !== passwordConfirm) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      await createUser(email, password)
      navigate('/account')
    } catch {
      setError('Failed to create account')
    }
  }

  return (
    <>
    <div className='max-w-[500px] mx-auto mt-40 p-4 border border-black-500 rounded'>
      <div>
        <h1 className='text-center text-2xl font-bold py-2'>Sign Up</h1>
        {error && <Alert variant='danger'>{error}</Alert>}
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-small'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} className='border p-3 rounded' type='email' required/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-small'>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className='border py-3 rounded' type='password' required/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-small'>Password Confirmation</label>
          <input onChange={(e) => setPasswordConfirm(e.target.value)} className='border py-3 rounded' type='password' required/>
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-4 text-white rounded'>Sign Up</button>
      </form>
    </div>
    <p className='text-center py-2'>
      Already have an account? <Link to='/' className='text-blue-500 underline'> Sign In</Link>
    </p>
    </>
  )
}

export default Signup;
