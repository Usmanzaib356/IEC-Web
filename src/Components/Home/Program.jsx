import React from 'react'
import home1 from "./image/home1.svg"
function Program() {
  return (
    <>
      <section className='bg-[#FFFFFF] w-full'>
        <div className=' py-16 max-w-[1280px] mx-auto px-m custom-m:px-16  '>
 
  <div className='flex justify-between gap-20 items-center  flex-wrap-p-secton'>

 

     <div className='w-[50%] program-chil-width program-chil-width-m '>
       <h1 className='fz-32 fz-14-p-m '>Tech Apprenticeship Program</h1>
       <p className='fz-16-p py-3 fz-16-p-m '>Registration for our Tech Apprenticeship Program is now open! Don't miss the opportunity to gain hands-on experience, mentorship, and industry-relevant skills. Apply now to secure your spot and embark on a rewarding tech journey.</p>
       <h4 className='fz-20-p pb-5 fz-12-p-m'>Deadline: 7th Aug, 2023</h4>
       <button className='bg-[#BE1300] py-2 custom-m:px-16 rounded-lg fz-18-btn fz-10-btn-m'>
          Apply Now
       </button>
     </div>

     <div className='w-[50%] program-chil-width display-none-m'>
        <img src={home1} alt="" />
     </div>

     </div>


        </div>
        
      </section>
    </>


  )
}

export default Program