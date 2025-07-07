import React from 'react'
import PerformanceSection from '../component/PerformanceSection'
import Section2 from '../component/Section2'
import ReadyBox from '../component/ReadyBox'
import Product from '../component/Product'
import OurTeam from '../component/OurTeam'
import MyworkExp from '../component/MyworkExp'
import Lastsection from '../component/Lastsection'
import Pr_Section from '../component/Pr_Section'
import Pr_Product from '../component/Pr_Product'
import Pr_Section2 from '../component/Pr_Section2'
import Pr_ReadyBox from '../component/Pr_ReadyBox'
import Pr_OurTeam from '../component/Pr_OurTeam'
import Pr_MyworkExp from '../component/Pr_MyworkExp'
import Pr_Lastsection from '../component/Pr_Lastsection'
import LineAnimation from '../component/LineAnimation'

const page = () => {
  return (
    <div >
     {/* <PerformanceSection/>
     <Section2/>
     <ReadyBox/>
     <Product/>
     <OurTeam/>
     <MyworkExp/>
     <Lastsection/> */}
     <Pr_Section/>
     <Pr_Section2/>

     
    
      <Pr_OurTeam/>
     
      <Pr_Product/>

  
    
    {/* <Pr_MyworkExp/> */}

<LineAnimation   lineheading="My" spanhead="work Experince" />


       <Pr_ReadyBox/>

       <Pr_Lastsection/>


    </div>
  )
}

export default page
