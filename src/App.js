import  Layout  from './Layout/Layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Busket from './Page/Busket/Busket'
import Favorite from './Page/Favorite/Favorite'
import Categories from './Page/Categories/categories'

function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/cart' element={<Busket/>}/>
        <Route path='/fav' element={<Favorite/>}/>
      </Route>
    </Routes>
    </div>
  )
}

export default App