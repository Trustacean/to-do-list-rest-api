import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../components/todo/security/AuthContext'

import TitleComponent from '../components/todo/TitleComponent'
export default function LoginForm() {
  const authContext = useAuth()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  return (
    <div className="container max-w-lg mx-auto h-screen place-content-center">
      <div className="rounded-lg shadow-2xl bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90%">
        <TitleComponent />
        <h2 className="text-2xl text-center mb-3">Login</h2>
        <form className="flex flex-col space-y-4  px-8 py-4 bg-slate-100 rounded-b-lg">
          {authContext.isAuthenticated ? <p className="text-green-500 text-center">Authenticated</p> : <p className="text-red-500 text-center">Not Authenticated</p>}
          <label htmlFor="username">Username</label>
          <input type="text" id="username" className="border p-1" value={username} onChange={handleUsernameChange => {
            setUsername(handleUsernameChange.target.value)
          }} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="border p-1" value={password} onChange={handlePasswordChange => {
            setPassword(handlePasswordChange.target.value)
          }} />
          <button type="submit" className="bg-gradient-to-r from-pink-400 to-blue-500 text-white p-2 rounded w-24
          mx-auto hover:from-pink-500 hover:to-blue-600 hover:text-gray-100 hover:shadow-md transition duration-400 ease-in-out
          " name="login" onClick={() => {
              if (authContext.login(username, password)) {
                navigate(`/dashboard/`)
              }
            }}>Login</button>
        </form>
      </div>
    </div>
  )
}