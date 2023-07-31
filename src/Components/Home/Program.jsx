
import home1 from "./image/home1.svg"
function Program() {
  return (
    <>
      <section className=' mt-[130px] md:mt-[50px] lg:mt-0 md:pt-1 lg:pt-0 bg-[#FFFFFF] w-full  mx-auto'>
        <div className=' mx-auto   max-w-[1440px]    '>

          <div className='w-5/6 mx-auto  flex justify-between gap-20 items-center  flex-wrap-p-secton'>



            <div className='w-3/5  program-chil-width program-chil-width-m '>
              <h1 className='text-sm font-bold md:text-base lg:text-2xl '>Tech Apprenticeship Program</h1>
              <p className='fz-16-p py-3 fz-16-p-m '>Registration for our Tech Apprenticeship Program is now open! Don&apos;t miss the opportunity to gain hands-on experience, mentorship, and industry-relevant skills. Apply now to secure your spot and embark on a rewarding tech journey.</p>
              <h4 className='lg:text-xl font-bold text-[#12125A] py-2'>Deadline: 7th Aug, 2023</h4>
              <button className='bg-[#BE1300] py-2 custom-m:px-16 rounded-lg fz-18-btn fz-10-btn-m '>
                Apply Now
              </button>
            </div>

            <div className='hidden w-2/5 lg:block  program-chil-width '>
              <img src={home1} alt="" />
            </div>

          </div>


        </div>

      </section>
    </>


  )
}

export default Program