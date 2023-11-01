import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, Title } from "./category.styles";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
