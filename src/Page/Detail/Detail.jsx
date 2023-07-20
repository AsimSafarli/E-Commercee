import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../Slice/Products/ProdutcSlice';
import DetailComponent from '../../Components/Detail/DetailComponent';
import Loading from '../../Components/Loading/Loading';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDetail(id));
  }, [dispatch, id]);

  console.log(productDetail, "productDetail");

  return (
    <div>
      {productDetailStatus === "LOADING" ?  <Loading /> : <DetailComponent productDetail={productDetail}/>
      }
    </div>
  );
}

export default Detail;
