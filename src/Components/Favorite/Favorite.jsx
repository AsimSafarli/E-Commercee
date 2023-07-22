import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFav } from '../../Slice/Favorite/FavoriteSlice';

function Favorite() {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.favorite.favorite);

  return (
    <div className="flex flex-col gap-y-10 w-max ">
      {favorite.map(item => (
        <div key={item.id} className="shadow p-3 flex flex-col md:flex-row items-center justify-between gap-x-10">
          <div><img src={item.image} className="w-32 object-fill" /></div>
          <div className="flex flex-col gap-y-5">
            <div>{item.title}</div>
            <div>{item.price}M</div>
          </div>
          <button className='bg-red-500  text-white hover:text-red-500 hover:border hover:border-red-500 hover:border-solid hover:bg-transparent p-2 w-max rounded-lg' onClick={() => dispatch(removeFromFav(item))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default Favorite;
