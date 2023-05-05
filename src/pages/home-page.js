import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Input, StyledForm } from "../components/input";
import NotFound from "../components/not-found";
import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { RiUserHeartFill, RiBookMarkFill, RiCodeBoxFill } from "react-icons/ri";
import { BsStar, BsStarFill, BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";
import { createFavorite, removeFavorite } from "../services/order-services";
import { useAuth } from "../context/auth-context";
import CategoryProducts from "../components/category-products";
import ShowProducts from "../components/show-products";
import { productsKey } from "../config";
import { colors } from "../styles";

const SearchCartBar = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;
  // margin-bottom: 49px;
`;

function HomePage() {
  const {setCurrentPage, state, setState} = useAuth();
  const [query, setQuery] = useState("");

  setCurrentPage("HomePage");

  const productsList = JSON.parse(sessionStorage.getItem(productsKey));
  const { status, data: queryResults, error } = state;

  function handleSubmit(state, productsList, query, event) {
    event.preventDefault();

    let queryResults = productsList.filter((product) => product.name.includes(query.toLowerCase()));
    queryResults.length > 0 ?
      setState({ ...state, status: "search-results", data: queryResults })
      :
      setState({ ...state, status: "error"});
  }


  function handleLeftIconClick(state) {
    setState({ ...state, status: "show-products" });
  }

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "53px", marginBottom: "22px"}}>
        <SearchCartBar>
          {status === "show-products" ?
            <FiSearch /> 
            :
            <AiOutlineLeft onClick={() => handleLeftIconClick(state)} 
          />}
          <StyledForm 
          onSubmit={(event)=> handleSubmit(state, productsList, query, event)}>
            <Input
            name="query"
            type="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            />
          </StyledForm>
          <Link to="/cart" style={{color: `${colors.gray.one}`}}> <BsCart/> </Link>
        </SearchCartBar>
        {status === "show-products" && <CategoryProducts />}
        {status === "search-results" && <ShowProducts productsList={queryResults} />}
        {status === "error" && <NotFound item={"products"}/>}
      </div>
    </div>
  );
}

export default HomePage;
