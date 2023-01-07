import styled from "@emotion/styled";
import { useState } from "react";
// import { useAuth } from "./context/auth-context";
// import { colors } from "./styles";
import { StyledDivForm } from "./input";
// import CategoryProducts from "./show-products";
import { productsKey } from "../config";
import ShowProducts from "./show-products";

const ItalianOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const MexicanOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const SnacksOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const SoupsOption = styled.div`
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const OptionsContainer = styled.div`
  margin: 0px;
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
  margin-top: 20px;
`;

const CategoriesDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function CategoryProducts() {
  const [productOption, setProductOption] = useState('italian');

  const productsList = JSON.parse(sessionStorage.getItem(productsKey));
  let currentCategoryProducts = productsList.filter((product) => product.category === productOption);

  return (
    <StyledDivForm>
      <CategoriesDataContainer>
        <OptionsContainer>
          <ItalianOption onClick={() => setProductOption( 'italian' )}> Italian </ItalianOption>
          <MexicanOption onClick={() => setProductOption('mexican')}> Mexican</MexicanOption>
          <SnacksOption onClick={() => setProductOption('snack')}> Snacks</SnacksOption>
          <SoupsOption onClick={() => setProductOption( 'soups' )}> Soups</SoupsOption>
        </OptionsContainer>

        <ShowProducts
          productsList={currentCategoryProducts}
        />
      </CategoriesDataContainer>

    </StyledDivForm>
  );
}

export default CategoryProducts;
