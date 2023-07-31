import bg1 from "./image/bg1.png"



function Main() {
  return (
    <div className="  md:h-screen   max-w-[1440px] max-h-[700px] mx-auto">
      <div className=" bg-slate-200 h-5/6">

        <div className={`relative h-full  bg-[#12125A] z-10  `}  >
          <img src={bg1}  className="absolute h-full w-full  opacity-20"/>
          <div className={`    relative w-full h-full  py-4   `} >
            
            <div className=" text-white  w-5/6  h-full  flex flex-col mx-auto  justify-center">
              <h1 className="md:text-3xl text-sm  font-bold my-2 " >Ignite Your Future with Advanced Skills for Success in the Digital Era</h1>
              <p className="font-normal text-[10px] md:text-xl" >Unlock your potential and gain a competitive edge with our featured courses, designed to provide you with practical skills, industry-relevant knowledge, and a pathway to excel in your desired field.</p>
              <div className="md:mt-14 my-5  ">
                <button className="bg-opacity-100  font-bold md:text-lg w-[104px] text-[10px] md:w-56 h-6  md:h-12 rounded-sm md:rounded-md  border border-red-500  bg-white text-red-600">Explore Courses</button>
                <button className="ms-2 md:ms-4 font-bold md:text-lg w-[104px] text-[10px]   md:w-56 h-6  md:h-12 rounded-sm md:rounded-md bg-opacity-100 bg-red-600 text-white">Apply Now</button>
              </div>

            </div>
            
            <div className="  block absolute top-[90%] left-0 w-full      ">
            <div className="py-2 lg:py-5 px-5 bg-white   w-5/6 mx-auto  shadow-slate-500 shadow-md  rounded-md lg:divide-x-2 lg:divide-red-500  flex flex-wrap justify-between items-center  ">
      <div className="py-2 w-1/2 lg:w-1/4 text-center text-xs font-semibold md:text-xl lg:text-2xl   flex flex-col items-center justify-center  lg:font-bold  border-b border-r lg:border-b-transparent    ">
        <h4 className=" text-[#12125A]">230</h4>
        <p className="text-[10px] lg:text-base font-normal">Graduates</p>
        </div>
      
      <div className="py-2 w-1/2 lg:w-1/4 text-center text-xs font-semibold md:text-xl lg:text-2xl    flex flex-col items-center justify-center  lg:font-bold border-b lg:!border-y-transparent ">
        <h4 className=" text-[#12125A]">125</h4>
        <p className=" text-[10px] lg:text-base font-normal">On Job Students</p>
        </div>
      <div className="py-2 w-1/2 lg:w-1/4 text-center text-xs font-semibold md:text-xl lg:text-2xl   flex flex-col items-center justify-center  lg:font-bold border-r ">
      <h4 className=" text-[#12125A]">50K</h4>
      <p className="text-[10px] lg:text-base font-normal">Average Salary</p>
        </div>
      <div className="py-2 w-1/2 lg:w-1/4 text-center text-xs font-semibold md:text-xl lg:text-2xl   flex flex-col items-center justify-center  lg:font-bold ">
        
        <h4 className=" text-[#12125A] ">PKR 6 Million</h4>
        <p className="text-[10px] lg:text-base font-normal">Monthly Collective Earning</p>
        </div>
    </div>
            
            </div>
            
          </div>
          

        </div>
      </div>
      
    </div>
  )
}

export default Main