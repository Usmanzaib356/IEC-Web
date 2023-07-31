import home4 from "./image/home4.svg"
function Enroll() {
  return (
    <>
       <section className=' w-full bg-[#FFFFFF] custom-m:py-16 custom-w:py-8'>
         
         <div className='w-5/6 max-w-[1440px] mx-auto  '>
              


            <div className="w-5/6 mx-auto">
                <h3 className='fz-20-f fz-12-m-enroll'>Getting Started</h3>
                <p className='fz-28-f py-2 fz-14-m-featured' >How To Enroll For The Courses </p>
            </div>


            <div className='flex gap-5 flex-wrap lg:flex-nowrap pt-8 justify-center'>
            
                <div className=' custom-m:w-[17rem] custom-w:w-[full]   text-center
                  card-border px-3 custom-m:py-4 custom-w:py-8   bg-[#FFFFFF] shadow-md Enroll-card-border-m' style={{ boxShadow:'0 4px 6px #D9D9D9' }} >
                
                  <div className='items-center flex justify-center Enroll-card-logo-m'>
                  <img src={home4} alt=""  />
                  </div>

                <h3 className='py-3 fz-20-Iec fz-14-m-featured'>Criteria</h3>
                <p className='fz-14-h fz-12-m-featured '>Unemployed graduate with basic computer literacy and ability to comprehend English.</p>
                <p></p>
                </div>

                <div className=' custom-m:w-[17rem] custom-w:w-[full]   text-center
                  card-border px-3 custom-m:py-4 custom-w:py-8   bg-[#FFFFFF] shadow-md Enroll-card-border-m' style={{ boxShadow:'0 4px 6px #D9D9D9' }} >
                
                  <div className='items-center flex justify-center Enroll-card-logo-m'>
                  <img src={home4} alt=""  />
                  </div>

                <h3 className='py-3 fz-20-Iec fz-14-m-featured'>Registration</h3>
                <p className='fz-14-h fz-12-m-featured '>Signup on the IEC website to check eligibility and receive online test.</p>
                <p></p>
                </div>

                <div className=' custom-m:w-[17rem] custom-w:w-[full]   text-center
                  card-border px-3 custom-m:py-4 custom-w:py-8   bg-[#FFFFFF] shadow-md Enroll-card-border-m' style={{ boxShadow:'0 4px 6px #D9D9D9' }} >
                
                  <div className='items-center flex justify-center Enroll-card-logo-m'>
                  <img src={home4} alt=""  />
                  </div>

                <h3 className='py-3 fz-20-Iec fz-14-m-featured'>Enrollment</h3>
                <p className='fz-14-h fz-12-m-featured '>Finalize course to get access to LMS, instructors and IEC community.</p>
                <p></p>
                </div>
                <div className=' custom-m:w-[17rem] custom-w:w-[full]   text-center
                  card-border px-3 custom-m:py-4 custom-w:py-8   bg-[#FFFFFF] shadow-md Enroll-card-border-m' style={{ boxShadow:'0 4px 6px #D9D9D9' }} >
                
                  <div className='items-center flex justify-center Enroll-card-logo-m'>
                  <img src={home4} alt=""  />
                  </div>

                <h3 className='py-3 fz-20-Iec fz-14-m-featured'>Screening</h3>
                <p className='fz-14-h fz-12-m-featured '>Attend orientation and clear final interview to start demo classes.</p>
                <p></p>
                </div>
                </div>



                
         </div>


       </section>
    </>
  )
}

export default Enroll