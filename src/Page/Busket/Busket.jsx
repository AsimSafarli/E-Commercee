import React, { useEffect } from 'react';
import { getCartTotal } from '../../Slice/Cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import Cart from '../../Components/Busket/Cart';
function Busket() {
  const dispatch = useDispatch();
  const { carts, count } = useSelector((state) => state.cart); 

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className='container mx-auto'>
      {count > 0 ? (
        <div className='flex items-center justify-center'>
         <Cart cart={carts}/>
        </div>
      ) : (
        <div className='flex flex-col container mx-auto gap-y-8 items-center justify-center'>
        <div className=' flex items-center justify-center text-2xl'>Cart is empty</div>
         <button className='bg-red-500  text-white hover:text-red-500 hover:border hover:border-red-500 hover:border-solid hover:bg-transparent p-2 w-max rounded-lg'><Link to='/'>Back to Home</Link></button>
        </div>
      )}
    </div>
  );
}

export default Busket;
