import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='w-screen h-max p-1 text-center bg-black flex flex-row text-white justify-center gap-x-5 text-lg'>
    <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div><div><Link to='/categories'>Shop Now</Link></div>
    </header>
  )
}

export default Header