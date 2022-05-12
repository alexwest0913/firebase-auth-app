import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Alert } from 'react-bootstrap';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      setError('')
      await signIn(email, password)
      navigate('/account')
    } catch {
      setError('Failed to Sign In')
    }
  }

  const { signIn } = UserAuth();
  return (
    <>
    <div className='max-w-[500px] mx-auto mt-40 p-4 border border-black-500 rounded'>
      <div>
        <h1 className='text-center text-2xl font-bold py-2'>Sign In</h1>
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
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-2 my-4 text-white rounded'>Sign In</button>
        <div className='text-center'>
        <Link to='/forgotpassword' className='text-blue-500 underline'>Forgot Password?</Link>
        </div>
      </form>
    </div>
    <p className='text-center py-2'>
      Don't have an account? <Link to='/signup' className=' text-blue-500 underline'> Sign Up</Link>
    </p>
    </>
  )
}

export default Signin;
