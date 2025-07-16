import React from 'react'

const TextSeo = (  
    {
        TextHead,
        Text1Head,
        TextSub,
       textList
    }
) => {
  return (
    <div>
{/* px-4 md:px-20 lg:px-40 pt-2 md:pt-10 lg:pt-[10px] */}

    <div className="px-4 pt-2 ">
      <div className="text-base md:text-xl font-semibold">
        <h4> {TextHead}</h4></div>
      <div className="font-medium text-[clamp(1rem,4vw,3rem)] mt-4">
       <h2 dangerouslySetInnerHTML={{ __html: Text1Head }} /> </div>
      <div className="text-[clamp(0.3rem,3vw,0.9rem)] mt-6 ">

        <p dangerouslySetInnerHTML={{ __html: TextSub }} />
        </div>
      <div>
      <ul className="list-disc pl-5 text-[clamp(0.3rem,3vw,0.9rem)] mt-2">
              
               {textList.map((text, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: text }} />
      ))}
             
          </ul>
      </div>
      </div>

      
    </div>
  )
}

export default TextSeo
