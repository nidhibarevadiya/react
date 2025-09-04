import './App.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
const App = () => {


  return (
    <div>
      {/* <h1 className='head'>This is Firebase and Authentication BaaS Module</h1>
      <TaskForm/>
      <TaskList/> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App