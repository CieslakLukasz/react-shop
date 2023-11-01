import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categoires-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../ultis/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/categories.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
