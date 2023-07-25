import React from 'react'
import Hero from './Hero'
import Program from './Program'
import Featured from './Featured'
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
     {/* <Hero></Hero> */}
     <Program></Program>
     <Featured></Featured>
     <IECapprentice></IECapprentice>
     <Month></Month>
     <Enroll></Enroll>
     <Agreement></Agreement>
     {/* <Companies></Companies> */}
     <User></User>
     <Team></Team>
    </>

  )
}

export default Home