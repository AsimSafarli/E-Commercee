import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
function Footer() {
  return (
    <div className=' mx-auto container p-10 mb-10 flex flex-row justify-between'>
    <div className='md:text-2xl text-lg font-bold'>
    Develop  by Asim Seferli
    </div>
    <div className='text-2xl flex flex-row gap-x-5'>
     <a href='https://github.com/AsimSafarli' ><BsGithub/></a>
     <a href='https://instagram.com/asimsafar' ><BsInstagram/></a>

    </div>
    </div>
  )
}

export default Footer