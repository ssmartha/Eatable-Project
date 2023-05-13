import styled from "@emotion/styled";
import { useState } from "react";
import { StyledDivForm } from "./input";
import { productsKey } from "../config";
import ShowProducts from "./show-products";
import { colors } from "../styles";

const Option = styled.div`
  border: none;
  background: none;
  cursos: pointer;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 17px;
  line-height: 20.29px;
  width: 87px;
  padding-bottom: 10px;
  text-align: center;
  ${props=> props.productOption === props.category? 
    `color: ${colors.orange.orioles_orange};
    border-bottom: 3px solid ${colors.orange.orioles_orange}`
    : 
    `color:${colors.gray.one};
    border-bottom: 3px solid ${colors.background}`}
`

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
  margin: 49px 0px 22px 0px;
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
  const categoryList = productsList.reduce((acum, current)=>{
    const similarCategories = acum.filter((element)=> element.includes(current.category.toLowerCase()) || current.category.toLowerCase().includes(element));
    if (similarCategories.length ===0){
      acum.push(current.category.toLowerCase())
    }
    return acum
  },[]);

  let currentCategoryProducts = productsList.filter((product) => product.category.toLowerCase().includes(productOption));

  return (
    <StyledDivForm>
      <CategoriesDataContainer>
        <OptionsContainer>
          {categoryList.map((category)=> (
            <Option
            productOption={productOption}
            category={category}
            onClick={()=> setProductOption(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Option>
          ))}
        </OptionsContainer>

        <ShowProducts
          productsList={currentCategoryProducts}
        />
      </CategoriesDataContainer>

    </StyledDivForm>
  );
}

export default CategoryProducts;
