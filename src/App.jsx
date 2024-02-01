import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import User from './components/User'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Login />}/>
        <Route  path="/signup" element={<Signup />}/>
        <Route  path="/user" element={<User />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
