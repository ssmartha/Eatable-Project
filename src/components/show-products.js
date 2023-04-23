// import CategoryCard from "../CategoryCard";
import PropTypes from "prop-types";
import { Wrapper } from "../styles";
import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import ProductCard from "./product-card";
import { productsKey } from "../config";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  align-items:center;
  justify-content: start;
  max-width: 332px;
`;

function ShowProducts({ productsList }) {
  const { state} = useAuth();

  const { status, ...rest } = state;

  return (
    <>
      {status === "search-results" && <p>Found {productsList.length} results</p>}
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
