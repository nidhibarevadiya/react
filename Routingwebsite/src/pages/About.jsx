import MyFooter from '../components/Myfooter';

function About() {
  return (
    <>
   
   <div className="flex justify-center items-center main mb-5">
     <div className="flex justify-center md:container md:mx-auto mt-5 main1">

      <div className=" flex justify-center  gap-4 aboutpart1 ">

        <div>
          <img src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about-01.jpg" alt="flower-img" className="img1 mt-25" />
        </div>
        <div className="">
          <img src="https://websitedemos.net/flower-shop-04/wp-content/uploads/sites/1414/2023/10/about-02.jpg" alt="flower-img"  width={314} className="img2 mt-11.5"/>
        </div>

      </div>
      <div className="cantaent m-0">
     <h6 className="abouthead">About Florist</h6>
     <h2 className="abouthead1" >Blossoming Your Special Moments with Nature's Finest</h2>
     <p className="aboutp">Welcome to Florist, where floral artistry meets passion for nature's beauty. Our story is rooted in a deep love for flowers and a commitment to creating unforgettable moments for our customers.</p>
     <button className="btn mt-2">READ MORE</button>
      </div>
    </div>
   </div>

     <MyFooter/>
    </>
  )
}

export default About