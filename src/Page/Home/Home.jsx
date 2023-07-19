import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import Product from '../../Components/Home/Product/Product'
import Categories from '../../Components/Home/Categories/Categories'
import Testimols from '../../Components/Home/Testimols/Testimols'

function Home() {
  return (
    <div>
      <Banner/>
      <Product/>
      <Categories/>
      <Testimols/>
    </div>
  )
}

export default Home