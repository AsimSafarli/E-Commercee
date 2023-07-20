import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Slice/Category/CategorySlice";

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  console.log(categories, "categories");

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (categories.length === 0) {
    return <div>Loading categories...</div>;
  }

  return (
    <div>
      <div className="flex flex-col text-left gap-y-4">
        {categories.map((category) => (
          <div key={category}  className="text-xl border  border-solid  p-2 text-center hover:text-red-500 hover:bg-white bg-red-500 text-white border-red-500">{category}</div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
