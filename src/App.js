import  Layout  from './Layout/Layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Busket from './Page/Busket/Busket'
import Error from './Page/Error/Error'
import Detail from './Page/Detail/Detail'

function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/cart' element={<Busket/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>

        <Route path='*' element={<Error/>}/>

      </Route>
    </Routes>
    </div>
  )
}

export default App