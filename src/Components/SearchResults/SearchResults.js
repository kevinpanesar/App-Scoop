import { React, useState } from "react";
import styled from "styled-components";

export const SearchResults = ({ searchResults, getGameData }) => {
  console.log(searchResults);

  return (
    <Container>
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
  overflow: scroll;
  padding-bottom: 15px;
`;

const SearchResult = styled.div`
  width: 90%;
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
`;

const SelectGameButton = styled.button`
  background-color: #ce1141;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 10px;
`;

const Teams = styled.p`
  font-size: 20px;
`;
