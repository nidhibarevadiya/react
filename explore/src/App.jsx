import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Accordions from './components/Accordint'
import HeroSection from './Tailwindcss/HeroSection';
import { Provider } from "@/components/ui/provider"
import Demo from '../chakraui/abcard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Accordions/>
   <HeroSection/>
     <Provider>
   <Demo/>
    </Provider>

    </>
  )
}

export default App
