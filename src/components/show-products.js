import { useAuth } from "../context/auth-context";
import styled from "@emotion/styled";
import ProductCard from "./product-card";

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
  max-width: 1000px;
  margin-bottom: 60px;
`;

const StyledText= styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 35.2px;
  padding-top: 32px;
  padding-bottom: 37px;
`;

function ShowProducts({ productsList }) {
  const { state} = useAuth();

  const { status, ...rest } = state;

  return (
    <>
      {status === "search-results"?
        productsList.length === 1?
        <StyledText>Found {productsList.length} result</StyledText>
        :
        <StyledText>Found {productsList.length} results</StyledText>
        :
        null
      }
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
