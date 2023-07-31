
import Main from './Main'
import Main3 from './Main3'
import Program from './Program'
// import Featured from './Featured'
import IECapprentice from './IECapprentice'
import Enroll from './Enroll'
import Month from './Month'
import User from './User'
import Agreement from './Agreement'
import Companies from './Companies'
import Team from './Team'

function Home() {
  return (
    <>
     <Main/>
     <Program></Program>
     <Main3/>
     {/* <Featured></Featured> */}
     <IECapprentice></IECapprentice>
     <Month></Month>
     <Enroll></Enroll>
     <Agreement></Agreement>
     <Companies></Companies>
     <User></User>
     <Team></Team>
    </>

  )
}

export default Home