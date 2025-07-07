import React from 'react'
import Link from 'next/link';
const PopupBtn = ({btnclass}) => {

  return (
    <div className= {`btnclass ${
            btnclass || "w-auto"
          }`}>
        <div >
          <Link href="/Contact">
            <button className="bg-[linear-gradient(to_right,_#7163FD,_#4132d1cc,_#3C31A5)] text-lg text-white font-medium py-3 px-4 rounded-[30px] w-full">
                  Start a Project
                </button>
          </Link>
              
              </div>
    </div>
  )
}

export default PopupBtn
