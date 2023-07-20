import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, getProducts } from '../../../Slice/Products/ProdutcSlice';
import Loading from '../../Loading/Loading';
import Products from './ProductDetail';

function Product({ category }) {
  const dispatch = useDispatch();
  const { products, productStatus } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log(products, "products");

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  useEffect(() => {
    if (products) {
      if (category) {
        const filtered = products.filter((product) => product.category === category);
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    }
  }, [products, category]);

  return (
    <div>
      {productStatus === "LOADING" ? (
        <Loading />
      ) : (
        <div className='flex flex-row flex-wrap justify-center items-center gap-x-10 gap-y-10'>
          {filteredProducts?.map((product, i) => (
            <Products key={i} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
