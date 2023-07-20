import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import Categories from '../../Components/Home/Categories/Categories'
import Testimols from '../../Components/Home/Testimols/Testimols'
import Main from '../../Components/Home/Product/Main'

function Home() {
  return (
    <div className='flex flex-col gap-y-10 mx-auto container'>
      <Banner/>
      <Categories/>
      <Main/>
      <Testimols/>
    </div>
  )
}

export default Home