import { Avatar, Badge, Space } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BiCartAlt, BiSearch } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";

function Navbar() {
  return (
    <nav className="flex flex-row container mx-auto  justify-between items-center mt-6">
      <div className="text-2xl"><Link to='/'>Shopping</Link></div>
      <ul className="flex flex-row gap-x-5 text-xl items-center">
        <NavLink to="/">Home</NavLink>
        <Link to="/fav">
          {" "}
          <Space size="middle">
            <Badge count={0} size="small">
              <GrFavorite className="text-2xl" />
            </Badge>
          </Space>
        </Link>
        <Link to="/cart">
          <Space size="middle">
            <Badge count={0} size="small">
              <BiCartAlt className="text-2xl" />
            </Badge>
          </Space>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
