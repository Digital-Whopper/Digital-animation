import React from 'react'

const BlogSection = () => {
  return (
    <div className='w-[84%] m-auto'>

    <div className="flex justify-between py-16">
     <div className="w-full text-center">
        
     <h2 className='text-center'>Our Blog</h2>
     <h2 className='text-black text-[clamp(1.5rem,5vw,4rem)]'>Value proposition accelerator product management venture</h2>
     </div>
    
    
    
    
    </div>
    
    <div className="container flex justify-between flex-wrap gap-[40px]">
     <div className="artical w-full md:w-1/4">
     <div className="image">
        <img src="/blog.png" alt="" className='rounded-3xl w-full' />
      </div>
      <div className="text">
      <h2 className='text-black  text-[22px] my-2'>Category <span className='text-[#777777] text-[12px]'>November 22, 2021</span></h2>
      <p className=''>In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your...</p>
      </div>
     </div>
    
    
     <div className="artical w-full md:w-1/4">
     <div className="image">
        <img src="/blog.png" alt="" className='rounded-3xl w-full' />
      </div>
      <div className="text">
      <h2 className='text-black  text-[22px] my-2'>Category <span className='text-[#777777] text-[12px]'>November 22, 2021</span></h2>
      <p className=''>In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your...</p>
      </div>
     </div>
    
     <div className="artical w-full md:w-1/4">
     <div className="image">
        <img src="/blog.png" alt="" className='rounded-3xl w-full' />
      </div>
      <div className="text">
      <h2 className='text-black  text-[22px] my-2'>Category <span className='text-[#777777] text-[12px]'>November 22, 2021</span></h2>
      <p className=''>In an ideal world, after a relationship ends both you and your ex will move on. But what if they can’t let go, and start spying on your...</p>
      </div>
     </div>
    </div>
    <div className="btn text-center  py-16">
     <button className='border border-black text-lg font-medium	py-3 px-4 rounded-[30px] w-auto'>
   Load More
    </button>
     </div>
        </div>
  )
}

export default BlogSection