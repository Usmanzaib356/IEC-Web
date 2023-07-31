
import home8 from "./image/home8.svg"
function Agreement() {
  return (
    <>
     <section className='bg-[#EFEFFF] max-w-[1440px] mx-auto w-full '>
       <div className='w-4/5  mx-auto py-10 '>
          <h1 className='lg:text-[28px] font-bold'>Learn, Earn and Contribute Agreement</h1>
<div className="py-5 flex flex-wrap  ">
  <div className="w-full md:w-1/2   p-3 rounded-lg  ">
    <div className="striped-border h-full  flex  items-start rounded-lg  p-3 bg-white">
      <img src={home8} className="pe-3"/>
    <div className="flex-1">
      <h4 className="md:text-xl font-bold py-2">Learning Commitment</h4>
    <p className="md:text-base">The student agrees to participate in a 5-month course and completed all required coursework, projects, assessments within the given timeframe.</p>
    </div>
    </div>
  </div>
  <div className="w-full md:w-1/2  p-3 ">
    <div className="striped-border  h-full  flex  items-start rounded-lg  p-3 bg-white">
      <img src={home8} className="pe-3"/>
    <div className="flex-1"><h4 className="md:text-xl font-bold py-2">Monthly Contribution</h4>
    <p className="md:text-base">The students agrees to pay PKR 2,000 monthly until employment is secured.</p>
    </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/2  p-3 ">
    <div className="striped-border h-full  flex  items-start rounded-lg  p-3 bg-white">
      <img src={home8} className="pe-3"/>
    <div className="flex-1"><h4 className="md:text-xl font-bold py-2">Contribution After Employment</h4>
    <p className="md:text-base">The student agrees to pay back 10% of monthly salary for next 24 months upon securing a job. The amount will be used to support another student like yourself.</p>
    </div>
    </div>
  </div>
  
  <div className="w-full md:w-1/2  p-3   ">
    <div className="striped-border   h-full  flex  items-start   p-3 bg-white border ">
      <img src={home8} className="pe-3"/>
    <div className="flex-1"><h4 className="md:text-xl font-bold py-2">Become a Part of IEC Community</h4>
    <p className="md:text-base">Upon fulfilling the previous 3 obligations, the student will become a valued member of IEC. You will have access to networking opportunities, alumni events, and continued support from the institution.</p>
    </div>
    </div>
  </div>
  
</div>
</div>

     </section>
    </>
  )
}

export default Agreement