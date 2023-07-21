import React, { useEffect } from 'react';
import { getCartTotal } from '../../Slice/Cart/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../Components/Busket/Cart/Cart';

function Busket() {
  const dispatch = useDispatch();
  const { carts, count } = useSelector((state) => state.cart); 

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className='container mx-auto'>
      {count > 0 ? (
        <div>
         <Cart cart={carts}/>
        </div>
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
  );
}

export default Busket;
