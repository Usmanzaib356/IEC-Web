import React from 'react'
import home5 from './image/home5.png'
import home6 from './image/home6.svg'
import home7 from "./image/home7.svg";
function User() {
    return (
        <>
            <section className='w-full bg-[#EFEFFF]'>
                <div className=' py-16 max-w-[1280px] mx-auto px-m custom-m:px-16'>

                    <div className='w-[80%]'>
                        <h3 className='fz-28-f'>IEC Apprentices</h3>
                        <p>Empower your company's productivity and profits with top-notch certified Web 3.0 Apprentices. Unlocking exponential growth potential and driving success for your business.</p>
                    </div>


                    <div className='pt-10 flex flex-wrap  justify-center gap-6 '>

                        <div className='w-[23rem] bg-[#FFFFFF] text-center items-center py-8 flex flex-col px-2 justify-center rounded-lg shadow-[#D9D9D9]'>
                            <img src={home5} alt="" />
                            <h1 className='py-3 fz-24'>Ijaz Liaquat</h1>
                            <h3 className='text-center fz-18-user'>Junior Web Developer At Orcalo Holding</h3>
                            <p className='py-2 fz-16-p px-2'>A talented Web Development Apprentice from cohort 1, now excels as a Junior Web Developer at Orcalo Holdings.</p>
                            <a href='' className='flex gap-2 pt-10'>
                                <img src={home6} alt="" />
                                <img src={home7} alt="" />
                            </a>
                        </div>


                        
                        <div className='w-[23rem] bg-[#FFFFFF] text-center items-center py-8 flex flex-col px-2 justify-center rounded-lg shadow-[#D9D9D9]'>
                            <img src={home5} alt="" />
                            <h1 className='py-3 fz-24'>Ijaz Liaquat</h1>
                            <h3 className='text-center fz-18-user'>Junior Web Developer At Orcalo Holding</h3>
                            <p className='py-2 fz-16-p px-2'>A talented Web Development Apprentice from cohort 1, now excels as a Junior Web Developer at Orcalo Holdings.</p>
                            <a href='' className='flex gap-2 pt-10'>
                                <img src={home6} alt="" />
                                <img src={home7} alt="" />
                            </a>
                        </div>



                        
                        <div className='w-[23rem] bg-[#FFFFFF] text-center items-center py-8 flex flex-col px-2 justify-center rounded-lg shadow-[#D9D9D9]'>
                            <img src={home5} alt="" />
                            <h1 className='py-3 fz-24'>Ijaz Liaquat</h1>
                            <h3 className='text-center fz-18-user'>Junior Web Developer At Orcalo Holding</h3>
                            <p className='py-2 fz-16-p px-2'>A talented Web Development Apprentice from cohort 1, now excels as a Junior Web Developer at Orcalo Holdings.</p>
                            <a href='' className='flex gap-2 pt-10'>
                                <img src={home6} alt="" />
                                <img src={home7} alt="" />
                            </a>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default User