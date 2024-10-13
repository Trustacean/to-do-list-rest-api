import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from '../auth/AuthContext'

import TitleComponent from '../components/todo/Title'
import ButtonComponent from '../components/todo/Button'

export default function LoginForm() {
  const authContext = useAuth()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function handleLogin(username: string, password: string) {
    if (username === "Trustacean" && password === "admin") {
      authContext.login(username, password)
      navigate('/dashboard')
    }
  }

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
          <div className='w-full flex'>
            <ButtonComponent text="Login" onClick={() => { handleLogin(username, password) }} hoverExpand={true} maxWidth='max-w-24' type='submit' />
          </div>
        </form>
      </div>
    </div>
  )
}