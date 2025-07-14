
import { Button } from 'flowbite-react';
import MyFooter from '../components/Myfooter';

function Home() {
  return (
    <>
 

     <div
      className="bg-cover bg-center bg-no-repeat  text-white  mb-8 homemain"
      style={{
        backgroundImage: "url('https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/hero-bg.jpg')", 
     
      }}
    >
      
    <div>
      <div className='homemain1 py-32' style={{
      backgroundColor:"#e2340d7a"
    }}>
       <div className=" text-center text-white rounded-xl  p-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Modern UI Components
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Build beautiful and fast websites using Flowbite React & Tailwind CSS.
        </p>
        <div className="flex justify-center">
          <Button  size="lg" className='bg-amber-900'>
            Explore Now
          </Button>
        </div>
      </div>
    </div>
    </div>

    </div>
    <MyFooter/>
    </>
  )
}

export default Home



