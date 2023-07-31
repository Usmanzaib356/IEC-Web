// import React from 'react'
// import home10 from "./image/home10.png"
import team from "./image/team.png"
import u1 from "./image/u1.svg"
import u2 from "./image/u2.svg"
import u3 from "./image/u3.svg"
import u4 from "./image/u4.svg"
import u5 from "./image/u5.svg"
import u6 from "./image/u6.svg"
import u7 from "./image/u7.svg"
import u8 from "./image/u8.svg"
import u9 from "./image/u9.svg"
import u10 from "./image/u10.svg"
import u11 from "./image/u11.svg"
import u12 from "./image/u12.svg"
import u13 from "./image/u13.svg"
import u14 from "./image/u14.svg"

function Team() {
  return (
     <>
       <section className='bg-[#FFFFFF]'>
            <div className='max-w-[1440px] mx-auto px-m custom-m:px-16 custom-m:py-16 custom-w:py-8'>
           
     
              <div className='flex items-center justify-center team-section-wrap gap-10' >
                  <div className='hidden  w-[100%]  lg:flex gap-3 justify-center items-center '>
                     
                     <div className=''>
                        <img src={u1} alt=""  />
                        <img src={u2} alt="" className='py-2'  />
                        <img src={u3} alt="" />
                        <img src={u4} alt="" className='py-2' />
                        <img src={u5} alt="" />
                     </div>
                     <div className=''>
                        <img src={u6} alt=""  />
                        <img src={team} alt="" className='py-2'  />
                        <img src={u13} alt="" />
                        <img src={u8} alt="" className='py-2' />
                        
                     </div>

                     <div className=''>
                        <img src={u14} alt=""  />
                        <img src={u9} alt="" className='py-2'  />
                        <img src={u10} alt="" />                        
                     </div>
                     <div className=''>
                        <img src={u11} alt=""  />
                        <img src={u12} alt="" className='py-2'  />
                     </div>
                     
                  </div>

                  <div className='custom-m:w-[100%] custom-w:w-full items-center'>
                    <h1 className='fz-36 fz-14-m-featured'>Our Team</h1>
                    <p className='custom-m:py-10 custom-w:py-4
                     fz-20-team fz-13-m-team'>Welcome to Our Team – a collective of dedicated experts, including leading academicians, entrepreneurs, and technologists with global experience, who have come together to found the Institute of Emerging Careers. Our passionate professionals are devoted to empowering your learning journey and creating an inspiring, supportive environment. Together, we are committed to helping you achieve your academic and career goals. Get to know our talented team and the diverse expertise they bring to guide you towards success.</p>

                    <button className='bg-[#BE1300] custom-m:px-12 custom-w:px-8 py-3 fz-12-m-teambtn rounded-md fz-18-btn  '>Meet the Team</button>
                  </div>

              </div>




            </div>
       </section>
     </>
  )
}

export default Team