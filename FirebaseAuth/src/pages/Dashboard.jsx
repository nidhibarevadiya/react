import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {

  const navigate = useNavigate()

  const handleLogout = async() => {
    await signOut(auth)
    navigate('/login')
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome</h2>
      <p>you are logged in!</p>
      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard