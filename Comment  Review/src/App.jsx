import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Comment from './Comment-Reviw/Comment'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Comment/>
    </>
  )
}

export default App
