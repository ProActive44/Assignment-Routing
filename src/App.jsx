import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import AllRoutes from './Routes/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <AllRoutes/>
    </>
  )
}

export default App
