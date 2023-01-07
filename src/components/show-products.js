// import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "../styles";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import ProductCard from "./product-card";
import { productsKey } from "../config";

const ProductsContainer = styled.div`
  width: fit-content;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 100px);
  justify-content:center;
  align-items: center;
`;

function ShowProducts({ productsList }) {

  return (
    <>
      <p>HOLA CATEGORY PRODUCTS!</p>
      <ProductsContainer>
        {productsList.map((product) => (
          <ProductCard
          id={product.id}
          key={product.id}
          image={product.picture_url}
          name={product.name}
          price={product.price}
          url={`/products/${product?.id}`}
          />
        ))}
      </ProductsContainer>
    </>
  );
}


export default ShowProducts;
