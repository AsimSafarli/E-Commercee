import React from 'react'
import { BiCartAlt, BiSearch } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
function Products({product}) {
  const navigate = useNavigate()

  const { id, image, price, title } = product;

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };


  return (
    <div className=' w-[200px] shadow flex flex-col  h-[400px] p-3 justify-between'   onClick={handleClick}
    >
    <div className='flex justify-center items-center'>
       <img src={product.image} className='w-[100px] h-[150px] object-cover '/>
    </div>
    <div className='text-center flex flex-col gap-y-2'>
      <div className='font-bold'>{product.price}M</div>
     <div className='font-medium text-sm'>{product.title}</div>
    </div>
    <div className='flex flex-row justify-between items-center'>
      <div><GrFavorite className='text-xl'/></div><div className='flex flex-row justify-center items-center bg-red-500 w-32 p-1 rounded hover:text-red-500 hover:bg-white  text-white hover:border hover:border-solid hover:border-red-500'><BiCartAlt className='text-2xl '/></div>
    </div>
     
    </div>
  )
}

export default Products