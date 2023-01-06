import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Input } from "../components/input";
import { getUserData } from "../services/github-api";
import SearchState from "../components/search-state";
import { Link } from "react-router-dom";
import { HiUserGroup } from "react-icons/hi";
import { RiUserHeartFill, RiBookMarkFill, RiCodeBoxFill } from "react-icons/ri";
import { BsStar, BsStarFill } from "react-icons/bs";
import { createFavorite, removeFavorite } from "../services/favorites-service";
import { useAuth } from "../context/auth-context";

function SearchPage() {
  const { favorites, setCurrentPage, state, setState, iconClickedStatus, setIconClickedStatus } = useAuth();
  const [query, setQuery] = useState("");
  // const [iconClickedStatus, setIconClickedStatus] = useState("");

  setCurrentPage("SearchPage");
  const { status, data: user, error } = state;

  function handleSubmit(event) {
    event.preventDefault();
    setState({ status: "pending", data: null, error: null });

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
        <form onSubmit={handleSubmit} style={{marginTop: "53px",}}>
          <Input
            name="query"
            type="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="username"
          />
        </form>
        {status === "pending" && <SearchState message={"Searching products"}/>}
        {status === "idle" && <p> Displaying Products by categories </p>}
        {status === "success" && (
          <p> Products found </p>
        )}
        {status === "error" && <SearchState message={"No products found"}/>}
      </div>
    </div>
  );
}

export default SearchPage;
