import { Avatar, Badge, Space } from "antd";
import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCartAlt, BiSearch } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../Slice/Cart/CartSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
   
  return (
    <nav className="flex flex-row container mx-auto justify-around md:justify-between items-center mt-6">
      <div className="text-2xl">
        <Link to="/">Shopping</Link>
      </div>
      <ul className="flex flex-row gap-x-5 text-xl items-center">
        <NavLink to="/">Home</NavLink>
        
        <Link to="/cart">
          <Space size="middle">
            <Badge count={count} size="small">
              <BiCartAlt className="text-3xl" />
            </Badge>
          </Space>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
