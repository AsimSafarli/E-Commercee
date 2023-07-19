import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import Product from '../../Components/Home/Product/Product'
import Categories from '../../Components/Home/Categories/Categories'
import Testimols from '../../Components/Home/Testimols/Testimols'

function Home() {
  return (
    <div className='flex flex-col gap-y-10 mx-auto container'>
      <Banner/>
      <Categories/>
      <Product/>
      <Testimols/>
    </div>
  )
}

export default Home