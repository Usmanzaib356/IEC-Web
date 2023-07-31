
import box1 from "./image/box1.png"
import box2 from "./image/box2.png"
import box3 from "./image/box3.png"

function Main3() {
    return (
            <div className=' max-w-[1440px] mx-auto py-5 my-5
        '>
                <div className=' w-5/6  mx-auto'>
                    <div className='flex justify-between items-center'>
                        <div className=''>
                            <h3 className='text-xs font-semibold md:text-xl '>Our Offerings</h3>
                            <h2 className='text-sm md:text-2xl  lg:text-3xl font-bold  py-2 md:py-3'>Featured Tech Courses</h2>
                            <p className='text-[12px] md:text-base leading-[14px]'>Explore our featured Tech programs, focused on delivering high-demand skills.</p>

                        </div>
                        <div className='hidden md:block'>
                            <button className='font-semibold md:px-5 md:py-2 text-[#155289] bg-white  border  border-[#155289] rounded-md'>View all</button>
                        </div>
                    </div>
                    <div className='overflow-scroll no-scrollbar   py-2 md:py-3  '>
                        <div className=' min-w-[768px] w-full    flex items-center justify-between'>
                            <div className='  w-2/5   md:w-2/5 p-2 bg-white rounded-md'>
                                <img src={box1} width={400} height={400} className='rounded-sm' alt={"box1"} />
                                <div className='ps-1'>
                                    <h1 className='text-[13px] lg:text-[22px] font-bold py-2'>UX Design</h1>
                                    <p className='text-[11px] md:text-lg line-clamp-3'>Learn to design user-centered digital products and services that meet user needs and expectations.</p>
                                    <div className='py-2 md:py-4'>
                                        <span className='text-[10px] md:text-sm font-bold'>4.8k</span>
                                        <span className='text-yellow-300 px-1'>*****</span>
                                        <span className='text-[10px] md:text-sm text-[#777777]'>(83,000 reviews)</span>
                                    </div>

                                </div>
                                <button className=" font-bold text-xs md:text-lg w-full px-1 py-2   md:px-5 md:py-4 rounded-md bg-opacity-100 bg-red-600 text-white">Enroll Now</button>
                            </div>
                            <div className='  w-2/5  md:w-2/5 p-2 bg-white rounded-md mx-5'>
                                <img src={box2} width={400} height={400} className='rounded-sm' alt={"box1"} />
                                <div className='ps-1'>
                                    <h1 className='text-[13px] line-clamp-1 lg:text-[22px] font-bold py-2'>Front End Web Development</h1>
                                    <p className='text-[11px] md:text-lg  line-clamp-3'>This course is designed to teach students the fundamental skills required to become a front-end web developer.</p>
                                    <div className='py-2 md:py-4'>
                                        <span className='text-[10px] md:text-sm font-bold'>4.8k</span>
                                        <span className='text-yellow-300 px-1'>*****</span>
                                        <span className='text-[10px] md:text-sm text-[#777777]'>(83,000 reviews)</span>
                                    </div>

                                </div>
                                <button className=" font-bold text-xs md:text-lg w-full px-1 py-2   md:px-5 md:py-4 rounded-md bg-opacity-100 bg-red-600 text-white">Enroll Now</button>
                            </div>
                            <div className='  w-2/5  md:w-2/5 p-2 bg-white rounded-md'>
                                <img src={box3} width={400} height={400} className='rounded-sm' alt={"box1"} />
                                <div className='ps-1'>
                                    <h1 className='text-[13px] lg:text-[22px] line-clamp-1 font-bold py-2'>Back End Web Development</h1>
                                    <p className='text-[11px] md:text-lg line-clamp-3'>This course is designed to learn the fundamental concepts and techniques used in back-end web development.</p>
                                    <div className='py-2 md:py-4'>
                                        <span className='text-[10px] md:text-sm font-bold'>4.8k</span>
                                        <span className='text-yellow-300 px-1'>*****</span>
                                        <span className='text-[10px] md:text-sm text-[#777777]'>(83,000 reviews)</span>
                                    </div>

                                </div>
                                <button className=" font-bold text-xs md:text-lg w-full px-1 py-2   md:px-5 md:py-4 rounded-md bg-opacity-100 bg-red-600 text-white">Enroll Now</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Main3