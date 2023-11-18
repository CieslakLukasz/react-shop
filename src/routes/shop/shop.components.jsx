import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categoires-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesStartAsync } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
