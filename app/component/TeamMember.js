"use client"
import Image from "next/image";

const TeamMember=({teamMembers})=>{
return(
    <>
    <div className="flex justify-center text-[#302E2E]">
    <div className="member-img-main grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-20 px-5 lg:px-32 gap-4 lg:gap-10 w-full place-items-center">
    {teamMembers.map((data,index)=>(
            <div className="member-div" key={index}>
        <div>
        <Image 
                    src={data.src} 
                    alt="Example Image" 
                    className="rounded-2xl"
                    width={250} 
                    height={250}  
                    quality={80}
         />
        </div>
        <div className="text-base md:text-2xl mt-4"><p>{data.name}</p> </div>
        <div className="mt-3 text-xs text-md lg::text-lg"><p>{data.designation}</p></div>
        </div>
        )
        )}
           
    </div>
    </div>
    </>
)

}
export default TeamMember;
