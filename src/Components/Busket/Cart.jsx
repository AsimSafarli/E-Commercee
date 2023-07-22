import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../Slice/Cart/CartSlice';

function Cart({ cart }) {
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.carts);

  return (
    <div className="flex flex-col gap-y-10 w-max ">
      {cart.map(item => (
        <div key={item.id} className="shadow p-3 flex flex-col md:flex-row items-center justify-between gap-x-10">
          <div><img src={item.image} className="w-32 object-fill" /></div>
          <div className="flex flex-col gap-y-5">
            <div>{item.title}</div>
            <div>{item.price}M</div>
          </div>
          <button className='bg-red-500  text-white hover:text-red-500 hover:border hover:border-red-500 hover:border-solid hover:bg-transparent p-2 w-max rounded-lg' onClick={() => dispatch(removeFromCart(item))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
