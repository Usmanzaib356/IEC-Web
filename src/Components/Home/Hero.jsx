import React from 'react';
import hero from "./image/hero.png";

function Hero() {
  return (
    <>

<div className="  md:h-screen  sm:h-[90vh]  max-w-[1440px] max-h-[700px] mx-auto">
      <div className=" bg-slate-200 h-full">

        <div className={`relative h-full  bg-[#12125A]  `}  >
          <img src={hero}  className="absolute h-full w-full  opacity-20"/>
          <div className={`    relative w-full h-full  py-4   `} >
            
            <div className=" text-white  w-4/5  h-full  flex flex-col mx-auto  justify-center">
              <h1 className="md:text-3xl text-sm  font-bold my-2 " >Ignite Your Future with Advanced Skills for Success in the Digital Era</h1>
              <p className="font-normal text-[10px] md:text-xl" >Unlock your potential and gain a competitive edge with our featured courses, designed to provide you with practical skills, industry-relevant knowledge, and a pathway to excel in your desired field.</p>
              <div className="md:mt-14 my-5  ">
                <button className="bg-opacity-100  font-bold md:text-lg w-[104px] text-[10px] md:w-56 h-6  md:h-12 rounded-sm md:rounded-md  border border-red-500  bg-white text-red-600">Explore Courses</button>
                <button className="ms-2 md:ms-4 font-bold md:text-lg w-[104px] text-[10px]   md:w-56 h-6  md:h-12 rounded-sm md:rounded-md bg-opacity-100 bg-red-600 text-white">Apply Now</button>
              </div>

            </div>
            
            <div className="  absolute  top-[90%] left-0 w-full  h-2/6    ">
            <div className=" bg-white   w-4/5 mx-auto h-3/5 shadow-slate-500 shadow-md  rounded-md divide-x-2 divide-red-500  flex justify-between items-center px-5 ">
      <div className=" text-center flex-1  flex flex-col items-center justify-center h-3/4 font-bold text-2xl text-[#12125A]">
        <h4 className="pt-3">230</h4>
        <p className="text-base font-normal">Graduates</p>
        </div>
      
      <div className=" text-center flex-1 py-10  flex flex-col items-center justify-center  h-3/4 font-bold text-2xl text-[#12125A]">
        <h4 className="pt-3">125</h4>
        <p className="text-base font-normal">On Job Students</p>
        </div>
      <div className=" text-center flex-1  flex flex-col items-center justify-center h-3/4 font-bold text-2xl text-[#12125A]">
      <h4 className="pt-3">50K</h4>
      <p className="text-base font-normal">Average Salary</p>
        </div>
      <div className="  text-center flex-1   flex flex-col items-center justify-center h-3/4 font-bold text-2xl text-[#12125A]">
        
        <h4 className="pt-3">PKR 6 Million</h4>
        <p className="text-base font-normal ">Monthly Collective Earning</p>
        </div>
    </div>
            
            </div>
            
          </div>
          

        </div>
      </div>
      
    </div>
      
    </>
  );
}

export default Hero;
