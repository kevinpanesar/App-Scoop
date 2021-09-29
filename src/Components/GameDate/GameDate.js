import { React, useState } from "react";
import styled from "styled-components";
import { SearchResults } from "../SearchResults/SearchResults";

export const GameDate = ({
  setDate,
  setSearchResults,
  searchResults,
  getGameData,
}) => {
  return (
    <Container>
      <Form>
        <Label>Choose A Date</Label>
        <input type="date" onChange={(e) => setDate(e.target.value)}></input>
      </Form>
      {searchResults !== undefined && (
        <SearchResults
          searchResults={searchResults}
          getGameData={getGameData}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
 width: 100%;
 background-color: white;
 color: black;
 padding-bottom: 20px;
`;


const Label = styled.label`
  font-family: "Oswald", sans-serif;
  font-size: 18px;
`;
const Form = styled.form`
  background-color: white;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    ::-webkit-datetime-edit-text {
      color: red;
      padding: 0 0.3em;
    }
  }
`;
