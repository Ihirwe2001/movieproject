import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { firebase_Auth } from '../../../firebase.config'


function Login() {


  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  const handleChange = async (e) => {
    e.preventDefault();
    try {
      const response = await signInWithEmailAndPassword(firebase_Auth, email, password)
      console.log(response)

    } catch (error) {
      console.log(error)
    }

  }
  return (

    <div>
      <div className="flex justify-center items-center h-screen">
        <form className="w-full max-w-xs">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" onClick={(e) => { handleChange(e) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
