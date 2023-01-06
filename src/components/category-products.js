// import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "../styles";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import ProductCard from "./product-card";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center
`;

function CategoryProducts({ category }) {
  console.log("category inside listt", category);
  const { productsList, state } = useAuth();
  console.log("stateeeeeeeeeeeeeeee inside categories", state)
  console.log("products inside listt", productsList);
  let currentCategoryProducts = productsList.filter((product) => product.category === category);
  // console.log("filtereddddddddd productsssssss",currentCategoryProducts);

  return (
    <>
      <p>HOLA CATEGORY PRODUCTS!</p>
      {/* <ProductsContainer>
        {currentCategoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            // onProductClick={onProductClick}
            {...product}
          />
        ))}
      </ProductsContainer> */}
    </>
  );
}


export default CategoryProducts;
