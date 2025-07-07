import Image from 'next/image'
import React from 'react'

const Boot = () => {
  return (
    <div>

<section className="bg-[url('/cta-section.svg')] bg-cover bg-center p-[94px] hidden md:block">
  <div className="flex justify-end relative">
  <Image
    src="/Robot.png"
    width={400}
    height={400}
    alt="robot"
    priority
    />
 <div className="absolute top-[200px] right-[208px] flex justify-end">
 <Image
    src="/blacklogo.png"
    width={50}
    height={50}
    alt="robot"
    priority
    />
 </div>
  </div>
</section>


    </div>
  )
}

export default Boot