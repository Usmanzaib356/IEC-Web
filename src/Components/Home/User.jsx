import React from 'react'
import home5 from './image/home5.png'
import home6 from './image/home6.svg'
import home7 from "./image/home7.svg";
function User() {
    return (
        <>
            <section className='w-full bg-[#EFEFFF]'>
                <div className=' custom-m:py-16 custom-w:py-8 max-w-[1280px] mx-auto px-m custom-m:px-16'>

                    <div className='w-[80%]'>
                        <h3 className='fz-28-f fz-14-m-featured'>IEC Apprentices</h3>
                        <p className='fz-12-m-featured py-m'>Empower your company's productivity and profits with top-notch certified Web 3.0 Apprentices. Unlocking exponential growth potential and driving success for your business.</p>
                    </div>


                    <div className='custom-m:pt-10 custom-w:pt-5 flex flex-wrap  justify-center gap-6 '>

                        <div className='custom-m:w-[23rem] custom-w:w-[220px] bg-[#FFFFFF] text-center items-center py-8 flex flex-col custom-m:px-2 custom-w:px-1 justify-center rounded-xl shadow-[#D9D9D9]'>
                            <img src={home5} alt="" className='user-card-m-logo'/>
                            <h1 className='py-3 fz-24 fz-14-m-featured'>Ijaz Liaquat</h1>
                            <h3 className='text-center fz-18-user fz-12-m-enroll'>Junior Web Developer At Orcalo Holding</h3>
                            <p className='py-2 fz-16-p px-2 fz-12-m-user'>A talented Web Development Apprentice from cohort 1, now excels as a Junior Web Developer at Orcalo Holdings.</p>
                            <a href='' className='flex gap-2 custom-m:pt-10 custom-w:pt-5'>
                                <img src={home6} alt="" className='user-card-m-link' />
                                <img src={home7} alt=""  className='user-card-m-link-2'/>
                            </a>
                        </div>


                        
                        <div className='custom-m:w-[23rem] custom-w:w-[220px] bg-[#FFFFFF] text-center items-center py-8 flex flex-col custom-m:px-2 custom-w:px-1 justify-center rounded-xl shadow-[#D9D9D9]'>
                            <img src={home5} alt="" className='user-card-m-logo'/>
                            <h1 className='py-3 fz-24 fz-14-m-featured'>Ijaz Liaquat</h1>
                            <h3 className='text-center fz-18-user fz-12-m-enroll'>Junior Web Developer At Orcalo Holding</h3>
                            <p className='py-2 fz-16-p px-2 fz-12-m-user'>A talented Web Development Apprentice from cohort 1, now excels as a Junior Web Developer at Orcalo Holdings.</p>
                            <a href='' className='flex gap-2 custom-m:pt-10 custom-w:pt-5'>
                                <img src={home6} alt="" className='user-card-m-link' />
                                <img src={home7} alt=""  className='user-card-m-link-2'/>
                            </a>
                        </div>



                        
                        <div className='custom-m:w-[23rem] custom-w:w-[220px] bg-[#FFFFFF] text-center items-center py-8 flex flex-col custom-m:px-2 custom-w:px-1 justify-center rounded-xl shadow-[#D9D9D9]'>
                            <img src={home5} alt="" className='user-card-m-logo'/>
                            <h1 className='py-3 fz-24 fz-14-m-featured'>Ijaz Liaquat</h1>
                            <h3 className='text-center fz-18-user fz-12-m-enroll'>Junior Web Developer At Orcalo Holding</h3>
                            <p className='py-2 fz-16-p px-2 fz-12-m-user'>A talented Web Development Apprentice from cohort 1, now excels as a Junior Web Developer at Orcalo Holdings.</p>
                            <a href='' className='flex gap-2 custom-m:pt-10 custom-w:pt-5'>
                                <img src={home6} alt="" className='user-card-m-link' />
                                <img src={home7} alt=""  className='user-card-m-link-2'/>
                            </a>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}

export default User