import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../Slice/Category/CategorySlice";

function Categories({setCategory}) {
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
      <div className="flex md:flex-col flex-row flex-wrap gap-x-3 md:text-left gap-y-4 md:w-max pl-[5px]   ">
        {categories.map((category) => (
          <div key={category} onClick={()=>setCategory(category)} className="text-xl border  border-solid  p-2 text-center hover:text-red-500 hover:bg-white bg-red-500 text-white border-red-500">{category}</div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
