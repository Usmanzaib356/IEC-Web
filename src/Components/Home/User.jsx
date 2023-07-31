
import Be from "./image/be.png"
import In from "./image/in.png"
import User1 from "./image/user1.png"
import User2 from "./image/user2.png"
import User3 from "./image/user3.png"


function User() {
    return (
        <>
        <div className='bg-[#EFEFFF] w-full max-w-[1440px] mx-auto py-5 my-5
        '>
            <div className=' w-5/6  mx-auto'>
            <div className='flex justify-between items-center'>
                <div className='md:w-3/4'>
                    
                    <h2 className='text-sm md:text-2xl  lg:text-3xl font-bold  py-2 md:py-3'>IEC Apprentices</h2>
                    <p className='text-[12px] md:text-base leading-[14px]'>Empower your company&apos;s productivity and profits with top-notch certified Web 3.0 Apprentices. Unlocking exponential growth potential and driving success for your business.</p>
                    
                </div>
                
            </div>
<div className='overflow-scroll no-scrollbar   py-4  '>
            <div className=' min-w-[768px] w-full space-x-6    flex   justify-between'>
            
            <div className="w-1/2 px-2 py-4 grid   bg-white rounded-lg">
                <div className= "   text-center">
                    <img src={User1} className="w-[60px] h-[60px] md:w-[186px] md:h-[186px] mx-auto"/>
                    <h4 className="py-2 text-sm md:text-2xl font-bold">Ramesha Qamar</h4>
                    <h5 className="py-1 text-xs md:text-lg font-semibold text-[#12125A]">Associate Product Designer at Cloudways</h5>
                    <p className="text-xs md:text-base">A successful UI/UX Design apprentice from cohort -1, has risen to become an Associate Product Designer at Cloudways.</p>
                </div>
                <div className="h-[28px] md:h-[54px] self-end  flex justify-center my-2">
                    <img src={In} className=""/>
                    <img src={Be}/>
                </div>
            </div>
            <div className="w-1/2 px-2 py-4  grid   bg-white rounded-lg">
                <div className= "  rounded-lg text-center">
                    <img src={User2} className="w-[60px] h-[60px] md:w-[186px] md:h-[186px] mx-auto"/>
                    <h4 className="py-2 text-sm md:text-2xl font-bold">Liaquat Ijaz</h4>
                    <h5 className="py-1 text-xs md:text-lg font-semibold text-[#12125A]">Junior Web Developer At Orcalo Holding</h5>
                    <p className="text-xs md:text-base">A talented Web Development Apprentice from cohort 1, now excels as a Junior Web Developer at Orcalo Holdings.</p>
                </div>
                <div className="h-[28px] md:h-[54px]  self-end flex justify-center my-2">
                    <img src={In} className=""/>
                    <img src={Be}/>
                </div>
            </div>
            <div className="w-1/2 px-2 py-4 grid   bg-white rounded-lg">
                <div className= "  rounded-lg text-center">
                    <img src={User3} className="w-[60px] h-[60px]  md:w-[186px] md:h-[186px] mx-auto"/>
                    <h4 className="py-2 text-sm md:text-2xl font-bold">Muhammad Munaf</h4>
                    <h5 className="py-1 text-xs md:text-lg font-semibold text-[#12125A]">User Experience Designer at Upwork</h5>
                    <p className="text-xs"> md:text-baseFrom cohort 1 UX Design apprentice to a top-rated User Experience Designer at Upwork, Munaf&apos;s journey exemplifies excellence in the field.</p>
                </div>
                <div className="h-[28px] md:h-[54px] self-end  flex justify-center my-2">
                    <img src={In} className=""/>
                    <img src={Be}/>
                </div>
            </div>

           
                
            </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default User