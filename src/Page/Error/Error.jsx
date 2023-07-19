import React from 'react'

function Error() {
  return (
    <div className='flex flex-col justify-center items-center gap-y-10 '>
    <div className='flex flex-col justify-center items-center'>
    <div className='text-8xl'>404 Not Found</div>
<div className='text-lg'>Your visited page not found. You may go home page.</div>
    </div>
     <div className='text-white h-14 w-64 bg-black text-center items-center justify-center flex rounded-xl'>Back to Home</div>
    </div>
  )
}

export default Error