import React from 'react'
import home9 from './image/home9.png'
function Companies() {
    return (
        <>
            <section className='bg-[#FFFFFF] '>
                <div className='max-w-[1280px] mx-auto px-m custom-m:px-16 custom-m:py-16 custom-w:py-8'>


                    <div className='flex gap-10 justify-center  items-center com-section-wrap '>
                        <div className='w-[100%] custom-m:gap-5 custom-w:gap-2 flex flex-col justify-center' >
                            <h3 className='fz-20-f fz-12-m-compaines '>Why IEC Apprentices?</h3>
                            <h3 className='custom-m:pb-10 fz-28-f fz-14-m-featured '>Why Companies Prefer IEC Apprentices</h3>
                            <img src={home9} alt="" className='display-none-m' />
                        </div>

                        <div className=' w-[100%] gap-5 flex flex-col justify-center  items-center '>

                            <div className='flex custom-m:gap-5 custom-w:gap-2 companies-wrap-cards '>

                                <div className='w-[220px]   ps-2  py-2 '>


                                    <h4 className='fz-20 py-1 mt-2  fz-14-m-compaines'>Taught By The Best</h4>
                                    <p className='fz-16-p custom-m:pt-3 custom-w:pt-2 fz-12-m-featured'>Every instructor has a decade long industry experience and is a renowned name.
                                    </p>

                                </div>

                                <div className='w-[220px]   ps-2  py-2 '>


                                    <h4 className='fz-20 py-1 mt-2  fz-14-m-compaines'>Taught By The Best</h4>
                                    <p className='fz-16-p custom-m:pt-3 custom-w:pt-2 fz-12-m-featured'>Every instructor has a decade long industry experience and is a renowned name.
                                    </p>

                                </div>

                            </div>

                            <div className='flex custom-m:gap-5 custom-w:gap-2 companies-wrap-cards '>

                                <div className='w-[220px]   ps-2  py-2 '>


                                    <h4 className='fz-20 py-1 mt-2  fz-14-m-compaines'>Taught By The Best</h4>
                                    <p className='fz-16-p custom-m:pt-3 custom-w:pt-2 fz-12-m-featured'>Every instructor has a decade long industry experience and is a renowned name.
                                    </p>

                                </div>

                                <div className='w-[220px]   ps-2  py-2 '>


                                    <h4 className='fz-20 py-1 mt-2  fz-14-m-compaines'>Taught By The Best</h4>
                                    <p className='fz-16-p custom-m:pt-3 custom-w:pt-2 fz-12-m-featured'>Every instructor has a decade long industry experience and is a renowned name.
                                    </p>

                                </div>

                            </div>





                        </div>

                    </div>



                </div>

            </section>
        </>
    )
}

export default Companies