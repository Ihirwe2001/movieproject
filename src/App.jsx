import { useState } from 'react'
import './App.css'
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Login from './components/authentication/login.jsx';
import Signup from './components/authentication/signup.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='bg-black text-white'>
      <Nav />
     <Login/>
     <Signup/>
    </div>
  )
}

export default App;
