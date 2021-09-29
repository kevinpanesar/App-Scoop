import { React, useState } from "react";
import styled from "styled-components";

export const SearchResults = ({ searchResults, getGameData }) => {
  console.log(searchResults);

  return (
    <Container>
      {searchResults.length == 0 && <h2>No Results</h2>}
      {searchResults.map((element) => {
        return (
          <SearchResult>
            <Teams>
              {element.hTeam.nickName + " vs " + element.vTeam.nickName}
            </Teams>
            <SelectGameButton onClick={() => getGameData(element.gameId)}>
              Select Game
            </SelectGameButton>
          </SearchResult>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  color: black;
  font-family: "Oswald", sans-serif;
  margin: 0 auto;
  height: 200px;
  overflow: auto;
  padding-bottom: 15px;
`;

const SearchResult = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  height: 60px;
  border: 2px solid black;
  border-top: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  :first-child {
    border-top: 2px solid black;
  }
  //mobile
  @media only screen and (max-width: 367px) {
    padding: 0 5px;
  }

`;

const SelectGameButton = styled.button`
  background-color: #ce1141;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
  @media only screen and (max-width: 367px) {
    padding: 7px 10px;
  }

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    margin-right: 70px;
  }
`;

const Teams = styled.p`
  font-size: 20px;

  @media only screen and (max-width: 367px) {
    /* For everything bigger than 768px */
    font-size: 18px;
  }

  @media only screen and (min-width: 768px) {
    /* For everything bigger than 768px */
    margin-left: 70px;
  }
`;
