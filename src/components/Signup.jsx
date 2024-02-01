import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../utils/firebase-config'
const Signup = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errMsg,setErrMsg] = useState('')
  const navigate = useNavigate()
  const handleSignUp = async() =>{
    try {
      await createUserWithEmailAndPassword(firebaseAuth,email,password)
    } catch (error) {
      console.log("errrr",error);
    setErrMsg(error?.message)
    }
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
      if(currentUser) navigate('/')
    })
  }
  return (
    <section className='h-screen w-screen flex items-center justify-center'>
      <div className="h-[50vh] min-w-[25vw] px-6 bg-green-300 border-2 border-black text-white text-center flex justify-center items-center flex-col gap-2">
        <h1 className='font-bold text-3xl text-blue-500 mb-3'>Signup</h1>
        <input className='ps-2 py-2 text-blue-500 text-xl border-none focus:outline-2 focus:outline-blue-400 w-4/5' type="email" placeholder='email...' value={email} onChange={e=>setEmail(e.target.value)}/>
        <input className='ps-2 py-2 text-blue-500 text-xl border-none focus:outline-2 focus:outline-blue-400 w-4/5' type="password" placeholder='password...' value={password} onChange={e=>setPassword(e.target.value)}/>
        <p className='text-red-500 mt-2'>{errMsg}</p>
        <button className='px-8 py-2 text-xl rounded bg-blue-400 my-2 hover:bg-blue-500 transition-all duration-400' onClick={handleSignUp}>Signup</button>
        <p className='text-black text-left text-lg'>Already have an account?
          <Link to="/login"> <span className='underline hover:text-blue-500'> Login</span></Link>
        </p>
      </div>
    </section>
  )
}

export default Signup
