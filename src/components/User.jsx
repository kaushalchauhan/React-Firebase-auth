import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../utils/firebase-config'
const User = () => {
  const [user,setUser] = useState(undefined)
  const navigate = useNavigate()

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) setUser(currentUser)
    else navigate("/login")
  })
  return (
    <section>
      <div className="container">
        <h1 className='mb-8 text-3xl xl:text-9xl lg:text-7xl md:text-5xl text-gray-400'>Welcome <br /> <span className='text-pink-300 underline'>{user?.email}</span></h1>
        <button className='px-8 py-2 text-xl rounded bg-blue-400 my-2 hover:bg-blue-500 transition-all duration-400' onClick={()=>signOut(firebaseAuth)}>Sign Out</button>
      </div>
    </section>
  )
}

export default User

