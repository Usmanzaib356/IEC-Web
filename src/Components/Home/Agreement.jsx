
import home8 from "./image/home8.svg"
function Agreement() {
  return (
    <>
     <section className='bg-[#EFEFFF] '>
       <div className='max-w-[1280px] mx-auto px-m custom-m:px-16 custom-m:py-10 custom-w:py-8'>
   
          <h1 className='fz-28-f custom-m:pb-10 custom-w:pb-5 fz-12-m-agreement'>Learn, Earn and Contribute Agreement</h1>
         

       <div className=' flex  custom-m:pb-5 custom-w:pb-5  justify-center  agreemencards gap-5 '>

               <div className=' border-cs px-3 bg-[#EFEFFF]  custom-m:py-3 custom-w:pt-5 custom-w:pb-10     custom-m:w-[560px] custom-w:w-[full] '>
                       <div className='h-[143px] md:h-[160px] bg-white rounded-3xl p-3 mx-0'>
                        <span className='flex items-center gap-3 Agreement-cards-m-logo img'>
                            <img src={home8} alt="" />
                            <h1 className='fz-20-p fz-14-m-featured text-[#12125A]'>Learning Commitment</h1>

                        </span>
                        <p className='text-start  custom-m:ps-14 custom-w:ps-10 fz-16-p pt-1 fz-12-m-featured'>The student agrees to participate in a <span className='text-[#BE1300]'>5-month</span> course and completed all required coursework, projects, assessments within the given timeframe.</p>
                        </div>
               </div>
               <div className=' border-cs px-3 bg-[#EFEFFF]  custom-m:py-3 custom-w:pt-5 custom-w:pb-10     custom-m:w-[560px] custom-w:w-[full] '>
                       <div className='h-[143px] md:h-[160px] bg-white rounded-3xl p-3 mx-0'>
                        <span className='flex items-center gap-3 Agreement-cards-m-logo img'>
                            <img src={home8} alt="" />
                            <h1 className='fz-20-p fz-14-m-featured text-[#12125A]'>Monthly Contribution</h1>

                        </span>
                        <p className='text-start  custom-m:ps-14 custom-w:ps-10 fz-16-p pt-1 fz-12-m-featured'>The students agrees to pay PKR 2,000 monthly until employment is secured..</p>
                        </div>
               </div>

               
               

       
       </div>


       <div className=' flex   custom-w:pb-5  justify-center  agreemencards gap-5 '>

       <div className='border-cs px-3 bg-[#EFEFFF]  custom-m:py-3 custom-w:pt-5 custom-w:pb-10     custom-m:w-[560px] custom-w:w-[full] '>
                       <div className='h-[143px] md:h-[160px] bg-white rounded-3xl p-3 mx-0'>
                        <span className='flex items-center gap-3 Agreement-cards-m-logo img'>
                            <img src={home8} alt="" />
                            <h1 className='fz-20-p fz-14-m-featured text-[#12125A]'>Contribution After Employment</h1>

                        </span>
                        <p className='text-start  custom-m:ps-14 custom-w:ps-10 fz-16-p pt-1 fz-12-m-featured'>The student agrees to pay back 10% of monthly salary for next 24 months upon securing a job. The amount will be used to support another student like yourself.</p>
                        </div>
               </div>

               <div className='border-cs px-3 bg-[#EFEFFF]  custom-m:py-3 custom-w:pt-5 custom-w:pb-10     custom-m:w-[560px] custom-w:w-[full] '>
                       <div className= 'h-[143px] md:h-[160px] bg-white rounded-3xl p-3 mx-0'>
                        <span className='flex items-center gap-3 Agreement-cards-m-logo img'>
                            <img src={home8} alt="" />
                            <h1 className='fz-20-p fz-14-m-featured text-[#12125A]'>Become a Part of IEC Community</h1>

                        </span>
                        <p className='text-start  custom-m:ps-14 custom-w:ps-10 fz-16-p pt-1 fz-12-m-featured'>Upon fulfilling the previous 3 obligations, the student will become a valued member of IEC. You will have access to networking opportunities, alumni events, and continued support from the institution.</p>
                        </div>
               </div>

       
       </div>



       </div>

     </section>
    </>
  )
}

export default Agreement