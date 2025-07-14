import { useState } from 'react'
import Navbar1 from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import  Profile from './pages/Profile'
import Error from './pages/Error'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  const routePath = createBrowserRouter([
  {
    path: "/",
    element: <Navbar1 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

  return (
    <>
      <RouterProvider router={routePath} />
    </>
  )
}

export default App
