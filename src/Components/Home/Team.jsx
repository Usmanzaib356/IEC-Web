import React from 'react'
import home10 from "./image/home10.png"
import team from "./image/team.png"
function Team() {
  return (
     <>
       <section className='bg-[#FFFFFF]'>
            <div className='max-w-[1280px] mx-auto px-m custom-m:px-16 custom-m:py-16 custom-w:py-8'>
           
     
              <div className='flex items-center justify-center team-section-wrap gap-10' >
                  <div className='w-[100%] flex gap-3 justify-center items-center display-none-m'>
                     
                     <div className=''>
                        <img src={team} alt=""  />
                        <img src={team} alt="" className='py-2'  />
                        <img src={team} alt="" />
                        <img src={team} alt="" className='py-2' />
                        <img src={team} alt="" />
                     </div>
                     <div className=''>
                        <img src={team} alt=""  />
                        <img src={team} alt="" className='py-2'  />
                        <img src={team} alt="" />
                        <img src={team} alt="" className='py-2' />
                        
                     </div>

                     <div className=''>
                        <img src={team} alt=""  />
                        <img src={team} alt="" className='py-2'  />
                        <img src={team} alt="" />                        
                     </div>
                     <div className=''>
                        <img src={team} alt=""  />
                        <img src={team} alt="" className='py-2'  />
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