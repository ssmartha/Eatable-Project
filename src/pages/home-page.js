import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Input, StyledForm } from "../components/input";
import { getUserData } from "../services/github-api";
import SearchState from "../components/search-state";
import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { RiUserHeartFill, RiBookMarkFill, RiCodeBoxFill } from "react-icons/ri";
import { BsStar, BsStarFill, BsCart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";
import { createFavorite, removeFavorite } from "../services/order-services";
import { useAuth } from "../context/auth-context";
import ShowProducts from "../components/show-products"

function HomePage() {
  const { favorites, setCurrentPage, state, setState, iconClickedStatus, setIconClickedStatus } = useAuth();
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState("");
  // const [iconClickedStatus, setIconClickedStatus] = useState("");

  setCurrentPage("HomePage");
  console.log("state in home page",state);
  const { status, data: user, error } = state;

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "searching", data: null, error: null });

    getUserData(query)
      .then((data) => {
        if (data.message === "Not Found") throw new Error("No users...");
        setState({ status: "success", data: data, error: null });
        console.log((findIdFromUserInFavorites(favorites, data) === "Not found"));
        findIdFromUserInFavorites(favorites, data) === "Not found" ? setIconClickedStatus(false) : setIconClickedStatus(true)
      })
      .catch((error) => {
        setState({
          status: "error",
          data: null,
          error: error.message,
        });
      });
  }

  function findIdFromUserInFavorites(favorites, user) {
    const userInFavorites = favorites.filter((fav) => fav.username === user.login);
    const idFromUserInFavorites = !userInFavorites[0] ? "Not found" : userInFavorites[0]["id"];
    return idFromUserInFavorites
  }

  function userDataToFavorites(user) {
    const { name, avatar_url, login: username, ...other } = user;
    return ({
      name: name,
      avatar_url: avatar_url,
      username: username,
    })
  }

  function addToFavorites(userData) {
    console.log("entrando a add to favorites");
    console.log(userData);
    createFavorite(userData).then(console.log).catch(console.log);
    console.log("saliendo add to favorites");
  }

  function deleteFromFavorites(userId) {
    removeFavorite(userId).then(console.log
    ).catch(console.log);
  }

  function handleIconClick(event, favorites, user) {
    event.preventDefault();
    setIconClickedStatus(!iconClickedStatus);
    let userId = findIdFromUserInFavorites(favorites, user);
    let userData = userDataToFavorites(user);
    iconClickedStatus ? deleteFromFavorites(userId) : addToFavorites(userData);
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
        <StyledForm onSubmit={handleSubmit} style={{ marginTop: "53px", display: "flex", flexDirection: "row" }}>
          {status === "show-products" ? <FiSearch /> : <AiOutlineLeft onClick={() => handleLeftIconClick(state)} />}
          <Input
            name="query"
            type="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="username"
          />
          <BsCart/>
        </StyledForm>
        {status === "searching" && <SearchState message={"Searching products"}/>}
        {status === "show-products" && <ShowProducts />}
        {status === "search-results" && (
          <p> Products found </p>
        )}
        {status === "error" && <SearchState message={"No products found"}/>}
      </div>
    </div>
  );
}

export default HomePage;
