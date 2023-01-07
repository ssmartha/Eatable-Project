import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Input, StyledForm } from "../components/input";
import SearchState from "../components/search-state";
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

function HomePage() {
  const { favorites, setCurrentPage, state, setState, iconClickedStatus, setIconClickedStatus } = useAuth();
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState("");

  setCurrentPage("HomePage");

  const productsList = JSON.parse(sessionStorage.getItem(productsKey));
  const { status, data: queryResults, error } = state;

    function handleSubmit(state, productsList, query, event) {
      event.preventDefault();

      let queryResults = productsList.filter((product) => product.name.includes(query));
      queryResults.length > 0 ?
        setState({ ...state, status: "search-results", data: queryResults })
        : setState({ ...state, status: "error"});
  }


  function handleLeftIconClick(state) {
    setState({ ...state, status: "show-products" });
  }

  const UserDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const UserDataGridContainer = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template: repeat(2, 140px) / repeat(2, 140px);
    width: 296px;
    height: 296px;
  `;

  const UserNameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 12px;
    gap: 4.6px;
  `;

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center",}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <StyledForm onSubmit={(event)=> handleSubmit(state, productsList, query, event)} style={{ marginTop: "53px", display: "flex", flexDirection: "row" }}>
          {status === "show-products" ? <FiSearch /> : <AiOutlineLeft onClick={() => handleLeftIconClick(state)} />}
          <Input
            name="query"
            type="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
          />
          <Link to="/cart"> <BsCart/> </Link>
        </StyledForm>
        {status === "show-products" && <CategoryProducts />}
        {status === "search-results" && <ShowProducts productsList={queryResults} />}
        {status === "error" && <SearchState message={"No products found"}/>}
      </div>
    </div>
  );
}

export default HomePage;
