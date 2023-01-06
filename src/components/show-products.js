import styled from "@emotion/styled";
import { useState } from "react";
// import { useAuth } from "./context/auth-context";
// import { colors } from "./styles";
import { StyledDivForm } from "./input";
import CategoryProducts from "./category-products";

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

function ShowProducts() {
  const [productOption, setProductOption] = useState('italian');

  return (
    <StyledDivForm>
      <div>
        <OptionsContainer>
          <ItalianOption onClick={() => setProductOption( 'italian' )}> Italian </ItalianOption>
          <MexicanOption onClick={() => setProductOption('mexican')}> Mexican</MexicanOption>
          <SnacksOption onClick={() => setProductOption('snack')}> Snacks</SnacksOption>
          <SoupsOption onClick={() => setProductOption( 'soups' )}> Soups</SoupsOption>
        </OptionsContainer>

        <CategoryProducts
          category={productOption}
        />
      </div>


      {/* {showEntryOption ==='Italian' ? <LoginForm /> : <SignupForm />} */}

    </StyledDivForm>
  );
}

export default ShowProducts;
