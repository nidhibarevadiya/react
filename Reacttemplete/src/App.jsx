import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto'>
        <div className="d-flex justify-content-center align-items-center min-vh-100 ">
          <div>
            <Home />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
